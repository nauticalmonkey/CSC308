import hopsy.AccountCreationController;
import hopsy.UserLoginController;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestAccountCreationController {

    @Test
    public void testCreateAccount() {
        AccountCreationController ac = new AccountCreationController();
        UserLoginController ulc = new UserLoginController();
        ac.createAccount(
        "{\"name\" : \"johnsmith@gmail.com\", \"password\" : \"admin420\", \"fullname\" : \"john smith\"}");
        ulc.getFullName("{\"username\" : \"johnsmith@gmail.com\"}");
    }
}
