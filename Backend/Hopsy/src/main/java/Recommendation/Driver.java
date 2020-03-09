package Recommendation;

import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import org.bson.Document;
import org.json.JSONArray;
import org.json.JSONObject;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Driver {
    public static void main(String[] args) {

        Web web = new Web();

        web.addBeer("Coors");
        web.addBeer("805");
        web.addBeer("Corona");

        web.addUser("fuck");
        User fuck = web.getUser("fuck");
        fuck.likeBeer("Corona");
        fuck.likeBeer("805");
        fuck.dislikeBeer("Coors");

        web.addUser("shit");
        User shit = web.getUser("shit");
        shit.likeBeer("Corona");
        shit.dislikeBeer("Coors");


        System.out.println(web.recommendBeer(shit));
        System.out.println(web.generatePercentages(shit));


        Web web2 = new Web();
        //populateWeb(web2);

        System.out.println("\n" + web2.recommendBeer(web2.getUser("1")) + "\n");
        web2.visualizeAccuracy(web2.getUser("1"));
        web2.visualizePercentages(web2.generatePercentages(web2.getUser("1")));

        int x = 0;

    }

    public static void populateWeb(Web w, MongoCollection<Document> usrC, MongoCollection<Document> beerC) {
        ArrayList<String> beers = getBeers(beerC);
        ArrayList<String> usersEmails = getEmails(usrC);

        for (String beer : beers) {
            w.addBeer(beer);
        }

        for (String usr : usersEmails){
            w.addUser(usr);
            ArrayList<String> likes = getLikes(usrC, usr);
            ArrayList<String> dislikes = getDislikes(usrC, usr);
            for (String like : likes) {
                if (!like.equals("first"))
                    w.getUser(usr).likeBeer(like);
            }
            for (String dislike : dislikes) {
                if (!dislike.equals("first"))
                    w.getUser(usr).dislikeBeer(dislike);
            }
        }
    }

    private static ArrayList<String> getBeers(MongoCollection<Document> bmc) {
        Document doc = bmc.find().first();
        JSONArray jarr = new JSONArray(doc.getString("beers"));
        ArrayList<String> beerArr = new ArrayList<>();

        for (int i = 0; i < jarr.length(); i++) {
            beerArr.add(jarr.getJSONObject(i).getString("name"));
        }

        return beerArr;
    }

    private static ArrayList<String> getEmails(MongoCollection<Document> umc) {
        ArrayList<String> emails = new ArrayList<>();
        FindIterable<Document> docs = umc.find();

        for (Document doc : docs) {
            emails.add(doc.getString("email"));
        }

        return emails;
    }

    private static ArrayList<String> getLikes(MongoCollection<Document> umc, String email) {
        BasicDBObject dbObject = new BasicDBObject();
        dbObject.put("email", email);
        Document doc = umc.find(dbObject).first();

        return (ArrayList<String>) doc.get("likes");
    }

    private static ArrayList<String> getDislikes(MongoCollection<Document> umc, String email) {
        BasicDBObject dbObject = new BasicDBObject();
        dbObject.put("email", email);
        Document doc = umc.find(dbObject).first();

        return (ArrayList<String>) doc.get("dislikes");
    }
}
