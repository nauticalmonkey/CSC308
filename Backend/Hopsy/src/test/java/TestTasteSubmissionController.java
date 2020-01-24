import hopsy.TasteSubmissionController;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestTasteSubmissionController {

    @Test
    public void testTaste() {
        TasteSubmissionController tsc = new TasteSubmissionController();
    tsc.formSubmission(
        "{\"name\" : \"johnsmith@gmail.com\", \"flavor\" : \"light\", \"origin\" : \"Mexico\", \"beers\" : [{\"beer\" : \"Modelo\"}, {\"beer\" : \"Coors\"}]}");
    assertEquals(
        tsc.getForm("johnsmith@gmail.com"),
        "{\"name\" : \"johnsmith@gmail.com\", \"flavor\" : \"light\", \"origin\" : \"Mexico\", \"beers\" : [{\"beer\" : \"Modelo\"}, {\"beer\" : \"Coors\"}]}");
    }
}