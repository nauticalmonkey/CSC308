package hopsy;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

import static com.mongodb.client.model.Filters.eq;

@RestController
public class TasteSubmissionController {

  @RequestMapping("/submit-tastes")
  public boolean formSubmission(@RequestBody String form) {
    JSONObject json = new JSONObject(form);
    /*JSONArray beers = json.getJSONArray("beers");
    String flavor = json.getString("flavor");
    String origin = json.getString("origin");*/
    String name = json.getString("name");

    MongoClient usrMC = DBUtils.getusrMC();
    MongoDatabase db = usrMC.getDatabase("Users");
    MongoCollection<Document> dbCollection = db.getCollection("users");

    dbCollection.updateOne(eq("email", name),
            new Document("$set", new Document("preferences", json)));


    return true;
  }
}
