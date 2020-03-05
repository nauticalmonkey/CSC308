package hopsy;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecommendationController {

    @RequestMapping("/requestRecommendation")
    public String getRecommendation(@RequestBody String email) {

        return "ok";
    }
}
