package hopsy;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BeerDBController {
    public BeerDBController(){}

    @RequestMapping("/create-beerDB")
    public static boolean createDB(@RequestBody String beers) {
        if (beers == null) return false;

        MongoClient usrMC = DBUtils.getusrMC();
        MongoDatabase db = usrMC.getDatabase("BeerDB");
        MongoCollection<Document> dbCollection = db.getCollection("beers");

        Document doc = new Document("beers", beers);
        DBUtils.insertDoc(dbCollection, doc);

        return true;
    }

    @RequestMapping("/get-beerDB")
    public static String getBeerDB() {
        MongoClient usrMC = DBUtils.getusrMC();
        MongoDatabase db = usrMC.getDatabase("BeerDB");
        MongoCollection<Document> dbCollection = db.getCollection("beers");
        System.out.println("gimme data");
        Document doc = dbCollection.find().first();
        
        return doc.getString("beers");
    }
}
