package hopsy;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class TasteSubmissionController {

  @RequestMapping("/submit-tastes")
  public boolean formSubmission(@RequestBody String form) {
    JSONObject json = new JSONObject(form);
    ArrayList<String> beers = (ArrayList<String>) json.get("beers");
    String flavor = json.getString("flavor");
    String origin = json.getString("origin");

    return true;
  }
}
