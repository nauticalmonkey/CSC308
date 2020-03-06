package hopsy;

import java.util.Iterator;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.util.JSON;

import org.bson.Document;
import org.json.JSONArray;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BeerDBController {
    public BeerDBController(){}

    @RequestMapping("/create-beerDB")
    public static boolean createDB(@RequestBody String beers) {
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
        // JSONArray ja = (JSONArray) doc.get("beers");
        // Iterator itr2 = ja.iterator(); 
        // while (itr2.hasNext())  
        // { 
        //     itr1 = ((Map) itr2.next()).entrySet().iterator(); 
        //     while (itr1.hasNext()) { 
        //         Map.Entry pair = itr1.next(); 
        //         System.out.println(pair.getKey() + " : " + pair.getValue()); 
        //     } 
        // }
        
        System.out.println(JSON.parse(doc.getString("beers")));
        return doc.getString("beers");
    }
}
