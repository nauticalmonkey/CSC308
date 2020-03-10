package Recommendation;

import java.util.HashMap;
import java.util.Map;

public class Web {
    static Map<String, Beer> beers;
    static Map<String, User> users;

    public Web() {
        beers = new HashMap<>();
        users = new HashMap<>();
    }


    public String recommendBeer(User u) { //entry point for actual
        Map<String, Double> percentages = generatePercentages(u);
        String beer = "";
        double max = Double.MIN_VALUE;
        for ( Map.Entry<String, Double> entry : percentages.entrySet() ) {
            String k = entry.getKey();
            double v = entry.getValue();
            if ( v > max && !u.liked.contains(k) && !u.disliked.contains(k)) {
                beer = k;
                max = v;
            }
        }
        if (beer.equals(""))
            return "Corona Extra";
        else
            return beer;
    }


    public Map<String, Double> generatePercentages(User u) {
        // TODO: possibly incorporate disliked list

        Map<String, Integer> counts = new HashMap<>();
        Map<String, Double> percentages = new HashMap<>();
        Beer cur;
        int total = 0;

        // System.out.println(u.liked);
        for ( String beer : u.liked ) {
            cur = beers.get(beer);
            if(cur == null || cur.relations == null) continue;
            for( Map.Entry<String, Beer> entry : cur.relations.entrySet() ) {
                String k = entry.getKey();
                Beer v = entry.getValue();
                if ( counts.containsValue(k) ) {
                    counts.put(k, counts.get(k) + v.liked);
                    counts.put(k, counts.get(k) - v.disliked);
                } else {
                    counts.put(k, v.liked);
                    counts.put(k, counts.get(k) - v.disliked);
                }
                total += v.liked + v.disliked;
            }
        }
        for( Map.Entry<String, Integer> entry : counts.entrySet() ) {
            String k = entry.getKey();
            int v = entry.getValue();
            percentages.put(k, 100.0 * v / total);
        }
        return percentages;
    }

    public void visualizePercentages(Map<String, Double> map) {
        for( Map.Entry<String, Double> entry : map.entrySet() ) {
            String k = entry.getKey();
            Double v = entry.getValue();
            System.out.printf("\n%2s:", k);
            while ( v > 0 ) {
                System.out.print("|");
                v -= .01;
            }
        }
    }

    public void visualizeAccuracy(User u) {
        Map<String, Double> percentages = generatePercentages(u);
        String recom = recommendBeer(u);
        System.out.println("Among those who like " + recom + ":");

        
        for ( String beer : u.liked ) {
            System.out.printf("%2s: ", beer);
            Beer cur = beers.get(recom).relations.get(beer);
            for ( int i = 0; i < cur.liked - cur.disliked; i++) {
                System.out.print("+");
            }
            for ( int i = 0; i < cur.disliked - cur.liked; i++) {
                System.out.print("-");
            }
            System.out.println();
        }
    }

    public static boolean likeBeer(User u, String beer) {
        // TODO: call undislikeBeer if u.disliked.contains(beer)
        if ( u.liked.contains(beer) || u.disliked.contains(beer) ) {
            return false;
        }
        for (String likedBeer : u.liked) {
            if (beers.get(likedBeer) == null || beers.get(likedBeer).relations.get(beer) == null) continue;
            beers.get(likedBeer).relations.get(beer).liked++;
            beers.get(beer).relations.get(likedBeer).liked++;
        }
        for (String dislikedBeer : u.disliked) {
            beers.get(beer).relations.get(dislikedBeer).disliked++;
        }
        return true;
    }

    public static boolean dislikeBeer(User u, String beer) {
        // TODO: call unlikeBeer if u.liked.contains(beer)
        if ( u.disliked.contains(beer) || u.liked.contains(beer) ) {
            return false;
        }
        for (String likedBeer : u.liked) {
            if(beers.get(likedBeer) == null || beers.get(likedBeer).relations.get(beer) == null) continue;
            beers.get(likedBeer).relations.get(beer).disliked++;
        }
        return true;
    }

    public boolean addUser(String name) {
        if (users.containsKey(name)) {
            return false;
        } else {
            users.put(name, new User());
            return true;
        }
    }

    public User getUser(String name) {
        return users.get(name);
    }

    public boolean addBeer(String name) {
        Beer beer = new Beer();
        if (beers.containsKey(name)) {
            return false;
        } else {
            for( Map.Entry<String, Beer> entry : beers.entrySet() ) {
                String k = entry.getKey();
                Beer v = entry.getValue();
                beer.relations.put(k, new Beer());
                v.relations.put(name, new Beer());
            }
            beers.put(name, beer);
            return true;
        }
    }

    public int getNumUsers() {
        return users.size();
    }

    public int getNumBeers() {
        return beers.size();
    }
}
