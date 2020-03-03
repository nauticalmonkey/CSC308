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
    private static final String database = "BeerDB";
    private static final String brs = "beers";

    @RequestMapping("/create-beerDB")
    public static boolean createDB(@RequestBody String beers) {
        if (beers == null) return false;

        MongoClient usrMC = DBUtils.getusrMC();
        MongoDatabase db = usrMC.getDatabase(database);
        MongoCollection<Document> dbCollection = db.getCollection(brs); //referencing correct db collection

        Document doc = new Document(brs, beers);
        DBUtils.insertDoc(dbCollection, doc); //inserting the beers

        return true;
    }

    @RequestMapping("/get-beerDB")
    public static String getBeerDB() { //gets the beer info
        MongoClient usrMC = DBUtils.getusrMC();
        MongoDatabase db = usrMC.getDatabase(database);
        MongoCollection<Document> dbCollection = db.getCollection(brs);
        System.out.println("gimme data");
        Document doc = dbCollection.find().first();

        if (doc == null) return null;
        
        return doc.getString(brs);
    }
}
