package hopsy;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.util.JSON;

import org.apache.tomcat.util.json.JSONParser;
import org.bson.Document;
import org.json.HTTP;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import static com.mongodb.client.model.Filters.eq;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
public class UserLoginController {

  @RequestMapping("/login")
  public boolean userLogin(@RequestBody String usr) { //validate a user against the db
    System.out.println("login");

    JSONObject jsObj = new JSONObject(usr);
    MongoClient usrMC = DBUtils.getusrMC();
    MongoDatabase db = usrMC.getDatabase("Users");
    MongoCollection<Document> dbCollection = db.getCollection("users");

    Document doc = DBUtils.findDoc(dbCollection, "email", jsObj.get("name").toString());

    // return new ResponseEntity(HttpStatus.OK);

    return (doc != null && doc.getString("password").equals(jsObj.get("password")));
  }

  @RequestMapping("/GetUserProfile")
  public String getFullName(@RequestBody String usr) { //validate a user against the db
    System.out.println("Get user data");
    System.out.println(usr);

    JSONObject jsObj = new JSONObject(usr);
    MongoClient usrMC = DBUtils.getusrMC();
    MongoDatabase db = usrMC.getDatabase("Users");
    MongoCollection<Document> dbCollection = db.getCollection("users");

    Document doc = DBUtils.findDoc(dbCollection, "email", jsObj.get("username").toString());

    JSONObject responseJSON = new JSONObject();
    String BEERSFIELDNAME = "beers";
    String prefString = doc.getString("preferences");
    String beerString = prefString.substring(prefString.indexOf(BEERSFIELDNAME) + 5);

    
  
    MongoDatabase beersDB = usrMC.getDatabase("BeerDB");
    MongoCollection<Document> beerDBCollection = beersDB.getCollection("beers");
    Document beerdoc = beerDBCollection.find().first();

    // String myjson = beerdoc.toJson();
    // JSONObject j = (JSONObject) JSON.parse(myjson);
    // System.out.println(j.getJSONObject("beers"));

    String beerDBSTR = beerdoc.get("beers").toString();
    System.out.println(beerDBSTR + "\n\n");

    HashMap<String, String> nameToImgMap = new HashMap<String, String>();
    List<String> beersnames = new ArrayList<String>();
    List<String> lines = new ArrayList<String>();
    String line = "";
    for (int i = 0; i < beerDBSTR.length(); i++)
    {
        if (beerDBSTR.charAt(i) != '\n')
        {
          line += beerDBSTR.charAt(i);
        }
        else
        {
          if (line.trim().length() > 3)
            lines.add(line.trim().replaceAll(",", ""));
          line = "";
        }
    }

    responseJSON.put("fullname", doc.getString("fullname"));
    

    System.out.println(lines);
    System.out.println(lines.get(0));
    System.out.println(lines.get(3));

    
    responseJSON.put(lines.get(0), lines.get(3));
    for (int i = 4; i < lines.size(); i += 4)
    {
      String name = lines.get(i).substring(8, lines.get(i).length() - 1);
      String url = lines.get(i + 3).substring(7, lines.get(i + 3).length() - 2);
      System.out.println(i + " " + name);
      System.out.println((i + 3) + " " + url);

      responseJSON.put(name, url);
    }

    System.out.println(responseJSON);

    List<String> beersToAdd = new ArrayList<String>();
    for (String beer : beerString.split(","))
    {
      if (beer.contains("name"))
      {
        //System.out.println(beer.substring(beer.indexOf("name") + 7, beer.length() - 2));
        beersToAdd.add(beer.substring(beer.indexOf("name") + 7, beer.length() - 2));
      }
        
    }
    String last = beersToAdd.get(beersToAdd.size() - 1);
    beersToAdd.set(beersToAdd.size() - 1, last.substring(0, last.length() - 2));
    System.out.println(beersToAdd);

    //System.out.println(beerdoc.get("beers"));

    
    
    // return new ResponseEntity(HttpStatus.OK);
    System.out.println(doc.getString("fullname"));
    
    
    return doc.getString("fullname");
  }
}
