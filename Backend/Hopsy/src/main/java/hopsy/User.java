package hopsy;

import org.bson.Document;

import java.util.ArrayList;

public class User {
  private String email;
  private String password;
  private String fullname;
  private String preferencesJSON;
  private ArrayList<String> likes = new ArrayList<>();
  private ArrayList<String> dislikes = new ArrayList<>();

  User(String email, String password, String fullname) {
    this.email = email;
    this.password = password;
    this.fullname = fullname;
    likes.add("first");
    dislikes.add("first");
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getEmail() {
    return email;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getPassword() {
    return password;
  }

  public void setJson(String preferencesJSON) {this.preferencesJSON = preferencesJSON;}

  public String getPreferencesJSON() {return preferencesJSON;}

  public ArrayList<String> getLikes() {
    return likes;
  }

  public ArrayList<String> getDislikes() {
    return dislikes;
  }

  public Document toDoc() {
    return new Document("email", this.email).append("password", this.password)
            .append("preferences", this.preferencesJSON).append("fullname" , this.fullname)
            .append("likes", this.likes).append("dislikes", this.dislikes);
  }

  public boolean likeBeer(String beer) {
    if (likes.contains(beer)) return false;
    likes.add(beer);
    dislikes.remove(beer);
    return true;
  }

  public boolean dislikeBeer(String beer) {
    if (dislikes.contains(beer)) return false;
    dislikes.add(beer);
    likes.remove(beer);
    return true;
  }
}
