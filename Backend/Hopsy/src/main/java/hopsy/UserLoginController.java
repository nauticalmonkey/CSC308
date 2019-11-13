package hopsy;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.List;

import static com.mongodb.client.model.Filters.eq;

@RestController
public class UserLoginController {

    public UserLoginController() {
        MongoClient mongoClient;
        mongoClient = new MongoClient(new MongoClientURI("mongodb+srv://42cleslie:password1234@cluster0-gxgoh.mongodb.net/userdb?retryWrites=true&w=majority"));

        MongoDatabase db = mongoClient.getDatabase("test");
        MongoCollection<Document> dbCollection = db.getCollection("testCollection");

        User user = new User("johnsmith@gmail.com", "guest");
        //Document userDoc = user.toDoc();
        //insertDoc(dbCollection, userDoc);
        Document myDoc = findDoc(dbCollection, "email", "jsmith@gmial.com");
        System.out.print(myDoc.getString("email"));

        //Document doc = new Document("email", "jsmith@gmial.com").append("password", "mypass");
        //dbCollection.insertOne(doc);
    }

    @RequestMapping("/login")
    public boolean userLogin(@RequestParam String name, @RequestParam String pswrd) {
        System.out.println(name);
        System.out.println(pswrd);
        return true;
    }

    private static boolean insertDoc(MongoCollection<Document> collection, Document doc) {
        try {
            collection.insertOne(doc);
        }
        catch(MongoException ex) {
            System.out.print("THERE WAS AN ERROR: " + ex.toString());
            return false;
        }
        return true;
    }

    private static Document findDoc(MongoCollection<Document> collection, String key, String value) {
        return collection.find(eq(key, value)).first();
    }
}
