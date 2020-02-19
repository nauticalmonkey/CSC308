import hopsy.BeerDBController;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestBeerDBController {
    @Test
    public void testLogin() {
        BeerDBController.createDB("[\n" +
                "    {\n" +
                "        \"name\":\"Anchor Steam\",\n" +
                "        \"ABV\":4.9,\n" +
                "        \"calories\":153,\n" +
                "        \"URL\":\"https://i.imgur.com/tDwQmku.png\"\n" +
                "    },\n" +
                "    {\n" +
                "        \"name\":\"Becks Light\",\n" +
                "        \"ABV\":2.3,\n" +
                "        \"calories\":64,\n" +
                "        \"URL\":\"https://i.imgur.com/E7E3vae.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Becks\",\n" +
                "        \"ABV\":5,\n" +
                "        \"calories\":143,\n" +
                "        \"URL\":\"https://i.imgur.com/JRsEa61.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Blue Moon Belgian White\",\n" +
                "        \"ABV\":5.4,\n" +
                "        \"calories\":168,\n" +
                "        \"URL\":\"https://i.imgur.com/TtpiMjS.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Budweiser\",\n" +
                "        \"ABV\":5,\n" +
                "        \"calories\":145,\n" +
                "        \"URL\":\"https://i.imgur.com/hkiixFl.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Bud Light\",\n" +
                "        \"ABV\":4.2,\n" +
                "        \"calories\":110,\n" +
                "        \"URL\":\"https://i.imgur.com/hCQ5MHz.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Busch\",\n" +
                "        \"ABV\":4.3,\n" +
                "        \"calories\":114,\n" +
                "        \"URL\":\"https://i.imgur.com/aTrnBwR.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Coors Original\",\n" +
                "        \"ABV\":5,\n" +
                "        \"calories\":148,\n" +
                "        \"URL\":\"https://i.imgur.com/BKtgNHr.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Coors Light\",\n" +
                "        \"ABV\":4.2,\n" +
                "        \"calories\":102,\n" +
                "        \"URL\":\"https://i.imgur.com/LrfUGPG.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Corona Extra\",\n" +
                "        \"ABV\":4.5,\n" +
                "        \"calories\":148,\n" +
                "        \"URL\":\"https://i.imgur.com/Jz7EG61.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Corona Light\",\n" +
                "        \"ABV\":4.1,\n" +
                "        \"calories\":99,\n" +
                "        \"URL\":\"https://i.imgur.com/aRLkHzI.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Dos Equis XX\",\n" +
                "        \"ABV\":4.8,\n" +
                "        \"calories\":145,\n" +
                "        \"URL\":\"https://i.imgur.com/oY1I6G4.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Firestone Walker 805\",\n" +
                "        \"ABV\":4.7,\n" +
                "        \"calories\":141,\n" +
                "        \"URL\":\"https://i.imgur.com/cdKPdUd.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Guinness Draught\",\n" +
                "        \"ABV\":4.2,\n" +
                "        \"calories\":125,\n" +
                "        \"URL\":\"https://i.imgur.com/wTsCSdn.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Heineken\",\n" +
                "        \"ABV\":5.4,\n" +
                "        \"calories\":166,\n" +
                "        \"URL\":\"https://i.imgur.com/BPBjexu.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Heineken Light\",\n" +
                "        \"ABV\":3.5,\n" +
                "        \"calories\":99,\n" +
                "        \"URL\":\"https://i.imgur.com/IrAfJ0m.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Keystone Light\",\n" +
                "        \"ABV\":4.2,\n" +
                "        \"calories\":100,\n" +
                "        \"URL\":\"https://i.imgur.com/KmFaBYY.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Michelob Original Lager\",\n" +
                "        \"ABV\":5,\n" +
                "        \"calories\":155,\n" +
                "        \"URL\":\"https://i.imgur.com/4i3bFxX.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Michelob Light\",\n" +
                "        \"ABV\":4.3,\n" +
                "        \"calories\":113,\n" +
                "        \"URL\":\"https://i.imgur.com/N7DR9mT.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Michelob Ultra\",\n" +
                "        \"ABV\":4.2,\n" +
                "        \"calories\":95,\n" +
                "        \"URL\":\"https://i.imgur.com/vT1ViEY.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Miller Genuine Draft\",\n" +
                "        \"ABV\":5,\n" +
                "        \"calories\":143,\n" +
                "        \"URL\":\"https://i.imgur.com/5M8KOqw.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Miller High Life\",\n" +
                "        \"ABV\":5.5,\n" +
                "        \"calories\":156,\n" +
                "        \"URL\":\"https://i.imgur.com/42rV3tX.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Miller Lite\",\n" +
                "        \"ABV\":4.2,\n" +
                "        \"calories\":96,\n" +
                "        \"URL\":\"https://i.imgur.com/47CEyuc.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Pabst Blue Ribbon\",\n" +
                "        \"ABV\":4.8,\n" +
                "        \"calories\":152,\n" +
                "        \"URL\":\"https://i.imgur.com/bwADzNJ.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Pilsner Urquell\",\n" +
                "        \"ABV\":4.3,\n" +
                "        \"calories\":156,\n" +
                "        \"URL\":\"https://i.imgur.com/TTFW6JG.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Sam Adams Golden Pilsner\",\n" +
                "        \"ABV\":4.6,\n" +
                "        \"calories\":145,\n" +
                "        \"URL\":\"https://i.imgur.com/PoD1Oxd.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Sam Adams IPA\",\n" +
                "        \"ABV\":5.9,\n" +
                "        \"calories\":175,\n" +
                "        \"URL\":\"https://i.imgur.com/CwUoWmv.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Sam Adams Light\",\n" +
                "        \"ABV\":4.1,\n" +
                "        \"calories\":124,\n" +
                "        \"URL\":\"https://i.imgur.com/4RvrFVs.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Sapporo\",\n" +
                "        \"ABV\":4.9,\n" +
                "        \"calories\":140,\n" +
                "        \"URL\":\"https://i.imgur.com/OjseCIh.png\"},\n" +
                "    {\n" +
                "        \"name\":\"Sierra Nevada Pale Ale\",\n" +
                "        \"ABV\":5.6,\n" +
                "        \"calories\":175,\n" +
                "        \"URL\":\"https://i.imgur.com/gBJX5dR.png\"},\n" +
                "    {\n" +
                "        \"name\":\"St. Pauli Girl\",\n" +
                "        \"ABV\":4.9,\n" +
                "        \"calories\":148,\n" +
                "        \"URL\":\"https://i.imgur.com/goA4ODD.png\"}\n" +
                "]");
    }

    @Test
    public void testGetBeers() {
        String st = BeerDBController.getBeerDB();
        System.out.println(st);
    }

}
