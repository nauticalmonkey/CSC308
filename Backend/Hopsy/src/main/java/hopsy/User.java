//package hopsy;
//
//import org.bson.Document;
//
//public class User {
//    private String email;
//    private String password;
//
//    User(String email, String password) {
//        this.email = email;
//        this.password = password;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public Document toDoc() {
//        return new Document("email", this.email).append("password", this.password);
//    }
//}
