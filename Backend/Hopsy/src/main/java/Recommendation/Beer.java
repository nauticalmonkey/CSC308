package Recommendation;

import java.util.HashMap;
import java.util.Map;

public class Beer {
    int liked, disliked, total;
    Map<String, Beer> relations;

    public Beer() {
        relations = new HashMap<>();
        liked = disliked = total = 0;
    }

    public boolean addUser(User u) {
        for (String beer : u.liked) {
            relations.get(beer).liked++;
            total++;
        }
        for (String beer : u.disliked) {
            relations.get(beer).disliked++;
            total++;
        }
        return true;
    }

    public boolean removeUser(User u) {
        for (String beer : u.liked) {
            relations.get(beer).liked--;
            total--;
        }
        for (String beer : u.disliked) {
            relations.get(beer).disliked--;
            total--;
        }
        return true;
    }

}
