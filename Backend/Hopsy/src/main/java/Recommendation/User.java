package Recommendation;

import java.util.ArrayList;
import java.util.List;

public class User {
    // not memory efficient: needs refactoring
    List<String> liked, disliked;

    public User() {
        liked = new ArrayList<>();
        disliked = new ArrayList<>();
    }

    public boolean likeBeer(String name) {
        if ( !liked.contains(name) ) {
            Web.likeBeer(this, name);
            liked.add(name);
            return true;
        }
        return false;
    }

    public boolean dislikeBeer(String name) {
        if ( !disliked.contains(name) ) {
            // order: important
            Web.dislikeBeer(this, name);
            disliked.add(name);
            return true;
        }
        return false;
    }
}
