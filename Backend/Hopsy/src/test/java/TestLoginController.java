import hopsy.UserLoginController;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestLoginController {

  @Test
  public void testLogin() {
    UserLoginController ulc = new UserLoginController();
    assertTrue(ulc.userLogin("{\"name\" : \"johnsmith@gmail.com\", \"password\" : \"admin420\"}"));
  }
}
