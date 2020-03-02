package hopsy;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountCreationController {

  @RequestMapping("/create-account") //endpoint for account creation
  public boolean createAccount(@RequestBody String usr) {
    if (usr == null) return false; //is the usr itself null

    JSONObject jsObj = new JSONObject(usr);
    MongoClient usrMC = DBUtils.getusrMC();
    MongoDatabase db = usrMC.getDatabase("Users");
    MongoCollection<Document> dbCollection = db.getCollection("users");

    if(jsObj.get("name") == null || jsObj.get("password") == null) return false; //null input?

    if (userExists(dbCollection, jsObj.get("name").toString())) return false; //does the email already exist?


    User theUser = new User(jsObj.get("name").toString(), jsObj.get("password").toString(), jsObj.get("fullname").toString());
    Document doc = theUser.toDoc();
    DBUtils.insertDoc(dbCollection, doc);

    return true;
  }

  private boolean userExists(MongoCollection<Document> collection, String email) {
    BasicDBObject dbObject = new BasicDBObject();
    dbObject.put("email", email);
    FindIterable<Document> fi = collection.find(dbObject);
    if (fi.first() == null) return false;
    return true;
  }

}
