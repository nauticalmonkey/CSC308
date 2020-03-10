package hopsy;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.util.JSON;

import org.apache.tomcat.util.json.JSONParser;
import org.bson.Document;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static com.mongodb.client.model.Filters.eq;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.json.JSONArray;

@RestController
public class UserLoginController {

  @RequestMapping("/login")
  public boolean userLogin(@RequestBody String usr) { //validate a user against the db
    if (usr == null) return false;

    JSONObject jsObj = new JSONObject(usr);
    MongoClient usrMC = DBUtils.getusrMC();
    MongoDatabase db = usrMC.getDatabase("Users");
    MongoCollection<Document> dbCollection = db.getCollection("users");

    Document doc = DBUtils.findDoc(dbCollection, "email", jsObj.get("name").toString());

    return (doc != null && doc.getString("password").equals(jsObj.get("password")));
  }

  @RequestMapping("/GetUserProfileName")
  public String getFullName(@RequestBody String usr) { //validate a user against the db
    JSONObject jsObj = new JSONObject(usr);
    MongoClient usrMC = DBUtils.getusrMC();
    MongoDatabase db = usrMC.getDatabase("Users");
    MongoCollection<Document> dbCollection = db.getCollection("users");

    Document doc = DBUtils.findDoc(dbCollection, "email", jsObj.get("username").toString());
    
    return doc.getString("fullname");
  }

  @RequestMapping("/GetUserProfileBeer")
  public String getFavBeers(@RequestBody String usr) { //validate a user against the db
    System.out.println("Get user beer data");
    System.out.println(usr);

    JSONObject jsObj = new JSONObject(usr);
    MongoClient usrMC = DBUtils.getusrMC();
    MongoDatabase db = usrMC.getDatabase("Users");
    MongoCollection<Document> dbCollection = db.getCollection("users");

    Document prefdoc = DBUtils.findDoc(dbCollection, "email", jsObj.get("username").toString());
    JSONObject responseJSON = new JSONObject();
    String BEERSFIELDNAME = "beers";

    String prefString = prefdoc.getString("preferences");
    String beerString = prefString.substring(prefString.indexOf(BEERSFIELDNAME) + 5);

    MongoDatabase bdb = usrMC.getDatabase("BeerDB");
    MongoCollection<Document> beerDbCollection = bdb.getCollection("beers");
    Document doc = beerDbCollection.find().first();

    JSONArray jarr = new JSONArray(doc.getString("beers"));

    for (int i = 0; i < jarr.length(); i++) 
    {
        String beerName = jarr.getJSONObject(i).getString("name");
        String beerImg = jarr.getJSONObject(i).getString("URL");
        responseJSON.put(beerName, beerImg);
    }

    List<String> beersToAdd = new ArrayList<String>();
    for (String beer : beerString.split(","))
    {
      if (beer.contains("name"))
      {
        beersToAdd.add(beer.substring(beer.indexOf("name") + 7, beer.length() - 1));
      }
    }

    JSONObject finalJSON = new JSONObject();
    for (String str : beersToAdd)
    {
      finalJSON.put(str, responseJSON.getString(str));
    }
    // System.out.println(finalJSON);

    return finalJSON.toString();
  }
}
