package hopsy;

import org.bson.Document;
import org.json.JSONObject;

public class User {
  private String email;
  private String password;
  private String preferencesJSON;

  User(String email, String password) {
    this.email = email;
    this.password = password;
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

  public Document toDoc() {
    return new Document("email", this.email).append("password", this.password)
            .append("preferences", this.preferencesJSON);
  }



}
