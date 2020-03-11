package hopsy;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

import static com.mongodb.client.model.Filters.eq;

@RestController
public class TasteSubmissionController {

  @RequestMapping("/submit-tastes") //endpoint for taste submission
  public boolean formSubmission(@RequestBody String form) {
    if (form == null) return false;

    JSONObject json = new JSONObject(form);

    String name = json.getString("name");

    MongoClient usrMC = DBUtils.getusrMC();
    MongoDatabase db = usrMC.getDatabase("Users");
    MongoCollection<Document> dbCollection = db.getCollection("users");

    json.remove("name");
    form = json.toString();

    dbCollection.updateOne(eq("email", name),                 //Update the users preferences
            new Document("$set", new Document("preferences", form)));

    ArrayList<String> beers = new ArrayList<>();
    JSONArray jarr = (JSONArray) json.get("beers");
    if (jarr != null) {
      for (int i = 0; i < jarr.length(); i++) {
        beers.add(jarr.getJSONObject(i).getString("name"));
      }
    }

    LikeController liker = new LikeController(); //Update the users liked beers
    for (String b : beers) {
      liker.likeBeer("{\"email\" : \"" + name + "\", \"beer\" : \"" + b + "\"}");
    }

    return true;
  }

  public String getForm(String name) {
    if (name == null) return "";

    MongoClient usrMC = DBUtils.getusrMC();
    MongoDatabase db = usrMC.getDatabase("Users");
    MongoCollection<Document> dbCollection = db.getCollection("users");

    Document doc = DBUtils.findDoc(dbCollection, "email", name);

    return doc.getString("preferences");
  }
}
