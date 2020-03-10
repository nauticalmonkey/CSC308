package hopsy;

import java.util.Iterator;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.util.JSON;

import org.bson.Document;
import org.json.JSONArray;
import org.json.JSONObject;
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

    @RequestMapping("/get-beer-img")
    public static String getBeerImage(@RequestBody String beer) { //gets the beer image from name
        MongoClient usrMC = DBUtils.getusrMC();
        MongoDatabase db = usrMC.getDatabase(database);
        MongoCollection<Document> dbCollection = db.getCollection(brs);
        System.out.println("gimme data");
        Document doc = dbCollection.find().first();

        JSONObject jsObj = new JSONObject(beer);
        JSONObject responseJSON = new JSONObject();
        JSONArray jarr = new JSONArray(doc.getString("beers"));

        for (int i = 0; i < jarr.length(); i++) 
        {
            String beerName = jarr.getJSONObject(i).getString("name");
            String beerImg = jarr.getJSONObject(i).getString("URL");
            responseJSON.put(beerName, beerImg);
        }

        System.out.println(responseJSON); 

        if (doc == null) return null;
        
        return responseJSON.getString(jsObj.getString("beer"));
    }
}
