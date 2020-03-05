package Recommendation;

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
        populateWeb(web2);

        System.out.println("\n" + web2.recommendBeer(web2.getUser("1")) + "\n");
        web2.visualizeAccuracy(web2.getUser("1"));
        web2.visualizePercentages(web2.generatePercentages(web2.getUser("1")));

        int x = 0;

    }

    public static void populateWeb(Web w) {
        List<String> lst = new ArrayList<>();
        List<User> users = new ArrayList<>();
        Random random = new Random();

        for ( int i = 0; i < 20; i++ ) { //change to number of beers in the db, use names
            w.addBeer(Integer.toString(i));
        }

        for ( int i = 0; i < 100; i++ ) { //change to number of users in db
            String name = Integer.toString(i);
            w.addUser(name);
            for ( int j = 0; j < 10; j++) { //change to number of like beers per user
                w.getUser(name).likeBeer(Integer.toString(random.nextInt(20)));
            }
            for ( int j = 0; j < 10; j++) { //change to number of disliked
                w.getUser(name).dislikeBeer(Integer.toString(random.nextInt(20)));
            }
        }
    }
}
