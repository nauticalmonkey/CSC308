import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestTDDLab {

    @Test
    public void testSimpleGreet() {
        String name = "Bob";
        String ret = TDDLab.greet(name);
        assertEquals("Hello, Bob.", ret);
    }

    @Test
    public void testNullName() {
        String name = null;
        String ret = TDDLab.greet(name);
        assertEquals("Hello, my friend.", ret);
    }

    @Test
    public void testUpperName() {
        String name = "BOB";
        String ret = TDDLab.greet(name);
        assertEquals("HELLO BOB!", ret);
    }

    @Test
    public void testTwoNames() {
        String[] names = {"Jack", "Jill"};
        String ret = TDDLab.greet(names);
        assertEquals("Hello, Jack and Jill.", ret);
    }

    @Test
    public void testArrayNames() {
        String[] names = {"Jack", "Jill", "Kumar"};
        String ret = TDDLab.greet(names);
        assertEquals("Hello, Jack, Jill, and Kumar.", ret);
    }

    @Test
    public void testShoutedArray() {
        String[] names = {"Jack", "BOB", "Jill"};
        String ret = TDDLab.greet(names);
        assertEquals("Hello, Jack and Jill. AND HELLO BOB!", ret);
    }

    @Test
    public void testCommasArray() {
        String[] names = {"Jack" , "Jill, Chuck"};
        String ret = TDDLab.greet(names);
        assertEquals("Hello, Jack, Jill, and Chuck.", ret);
    }

    @Test
    public void testCSVArray() {
        String[] names = {"Jack" , "\"Jill, Chuck\""};
        String ret = TDDLab.greet(names);
        assertEquals("Hello, Jack and Jill, Chuck.", ret);
    }
}
