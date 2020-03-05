package hopsy;

import com.mongodb.BasicDBObject;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

import static com.mongodb.client.model.Filters.eq;

@RestController
public class LikeController {

    @RequestMapping("/likebeer")
    public boolean likeBeer(@RequestBody String input) {
        if (input == null) return false;
        System.out.println(input);

        JSONObject jsObj = new JSONObject(input);
        MongoClient usrMC = DBUtils.getusrMC();
        MongoDatabase db = usrMC.getDatabase("Users");
        MongoCollection<Document> dbCollection = db.getCollection("users");

        String email = jsObj.getString("email");
        String beer = jsObj.getString("beer");

        if (email == null || beer == null) return false;

        ArrayList<String> liked = getLiked(dbCollection, email);
        ArrayList<String> disliked = getDisliked(dbCollection, email);
        if (liked == null || disliked == null) return false;
        else if (liked.get(0).equals("first")) {
            liked.remove(0);
        }

        //check if its in the list, add if not, remove from disliked if its there, return true or false
        return addToLiked(dbCollection, email, beer, liked, disliked);
    }

    @RequestMapping("/dislikebeer")
    public boolean dislikeBeer(@RequestBody String input) {
        if (input == null) return false;

        JSONObject jsObj = new JSONObject(input);
        MongoClient usrMC = DBUtils.getusrMC();
        MongoDatabase db = usrMC.getDatabase("Users");
        MongoCollection<Document> dbCollection = db.getCollection("users");

        String email = jsObj.getString("email");
        String beer = jsObj.getString("beer");

        if (email == null || beer == null) return false;

        ArrayList<String> liked = getLiked(dbCollection, email);
        ArrayList<String> disliked = getDisliked(dbCollection, email);
        if (liked == null || disliked == null) return false;
        else if (disliked.get(0).equals("first")) {
            disliked.remove(0);
        }

        //check if its in the list, add if not, remove from disliked if its there, return true or false
        return addToDisliked(dbCollection, email, beer, liked, disliked);
    }

    private ArrayList<String> getLiked(MongoCollection<Document> mc, String email) {
        BasicDBObject dbObject = new BasicDBObject();
        dbObject.put("email", email);
        FindIterable<Document> fi = mc.find(dbObject);
        Document doc = fi.first();
        if (doc == null) return null;
        return (ArrayList<String>) doc.get("likes");
    }

    private ArrayList<String> getDisliked(MongoCollection<Document> mc, String email) {
        BasicDBObject dbObject = new BasicDBObject();
        dbObject.put("email", email);
        FindIterable<Document> fi = mc.find(dbObject);
        Document doc = fi.first();
        if (doc == null) return null;
        return (ArrayList<String>) doc.get("dislikes");
    }

    private boolean addToLiked(MongoCollection<Document> mc,  String email,
                               String beer, ArrayList<String> liked, ArrayList<String> disliked) {
        if (liked.contains(beer)) return false;
        liked.add(beer);
        disliked.remove(beer);

        mc.updateOne(eq("email", email),
                new Document("$set", new Document("likes", liked)));
        mc.updateOne(eq("email", email),
                new Document("$set", new Document("dislikes", disliked)));

        return true;
    }

    private boolean addToDisliked(MongoCollection<Document> mc,  String email,
                               String beer, ArrayList<String> liked, ArrayList<String> disliked) {
        if (disliked.contains(beer)) return false;
        disliked.add(beer);
        liked.remove(beer);

        mc.updateOne(eq("email", email),
                new Document("$set", new Document("likes", liked)));
        mc.updateOne(eq("email", email),
                new Document("$set", new Document("dislikes", disliked)));

        return true;
    }
}
