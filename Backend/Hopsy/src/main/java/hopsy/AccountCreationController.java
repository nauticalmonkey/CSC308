package hopsy;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountCreationController {

    @RequestMapping("/create-account")
    public boolean userLogin(@RequestBody String usr) {
        JSONObject jsObj = new JSONObject(usr);
        MongoClient usrMC = DBUtils.getusrMC();
        MongoDatabase db = usrMC.getDatabase("Users");
        MongoCollection<Document> dbCollection = db.getCollection("users");

        User theUser = new User(jsObj.get("name").toString(), jsObj.get("password").toString());
        Document doc = theUser.toDoc();
        DBUtils.insertDoc(dbCollection, doc);

        return true;
    }

}