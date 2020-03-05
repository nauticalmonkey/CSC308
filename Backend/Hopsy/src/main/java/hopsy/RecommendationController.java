package hopsy;

import Recommendation.Driver;
import Recommendation.Web;
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

@RestController
public class RecommendationController {

    @RequestMapping("/requestRecommendation")
    public String getRecommendation(@RequestBody String email) {
        if (email == null) return null;

        JSONObject jsObj = new JSONObject(email);
        MongoClient usrMC = DBUtils.getusrMC();
        MongoDatabase udb = usrMC.getDatabase("Users");
        MongoCollection<Document> userDbCollection = udb.getCollection("users");
        MongoDatabase bdb = usrMC.getDatabase("BeerDB");
        MongoCollection<Document> beerDbCollection = bdb.getCollection("beers");

        String stEmail = jsObj.getString("email");

        Web web = new Web();

        Driver.populateWeb(web, userDbCollection, beerDbCollection);

        return web.recommendBeer(web.getUser(stEmail));
    }
}
