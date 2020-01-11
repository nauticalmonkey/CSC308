import org.junit.*;
import static org.junit.Assert.*;

public class TestTDDLab
{
    @Test
    public void testGreetBob()
    {
        String expectedString = "Hello, Bob.";
        assertEquals(expectedString, TDDLab.greet("Bob"));
    }

    @Test
    public void testGreetNull()
    {
        String expectedString = "Hello, my friend.";
        assertEquals(expectedString, TDDLab.greet());
    }

    @Test
    public void testShouting()
    {
        String expectedString = "HELLO JERRY!";
        assertEquals(expectedString, TDDLab.greet("JERRY"));
    }

    @Test
    public void testTwoNames()
    {
        String expectedString = "Hello, Jill and Jane.";
        String[] names = {"Jill", "Jane"};

        assertEquals(expectedString, TDDLab.greet(names));
    }

    @Test
    public void testMultiName()
    {
        String expectedString = "Hello, Amy, Brian, and Charlotte.";
        String[] names = {"Amy", "Brian", "Charlotte"};

        assertEquals(expectedString, TDDLab.greet(names));
    }

    @Test
    public void testMultiName2()
    {
        String expectedString = "Hello, Amy, Brian, Joe, and Charlotte.";
        String[] names = {"Amy", "Brian", "Joe", "Charlotte"};

        assertEquals(expectedString, TDDLab.greet(names));
    }

    @Test
    public void testMixedNames()
    {
        String expectedString = "Hello, Amy and Charlotte. AND HELLO BRIAN!";
        String[] names = {"Amy", "BRIAN", "Charlotte"};

        assertEquals(expectedString, TDDLab.greet(names));
    }

    @Test
    public void testMixedNames2()
    {
        String expectedString = "Hello, Amy and Charlotte. AND HELLO BRIAN AND JOE!";
        String[] names = {"Amy", "BRIAN", "Charlotte", "JOE"};

        assertEquals(expectedString, TDDLab.greet(names));
    }

    @Test
    public void testMixedNames3()
    {
        String expectedString = "Hello, Amy and Charlotte. AND HELLO BRIAN, JOE, AND MARK!";
        String[] names = {"Amy", "BRIAN", "Charlotte", "JOE", "MARK"};

        assertEquals(expectedString, TDDLab.greet(names));
    }

    @Test
    public void testStringsContainingCommas()
    {
        String expectedString = "Hello, Bob, Charlie, and Dianne.";
        String[] names = {"Bob", "Charlie, Dianne"};

        assertEquals(expectedString, TDDLab.greet(names));
    }

    @Test
    public void testStringsContainingCommas2()
    {
        String expectedString = "Hello, Bob and Charlie. AND HELLO MARK!";
        String[] names = {"Bob", "Charlie, MARK"};

        assertEquals(expectedString, TDDLab.greet(names));
    }

    @Test
    public void testEscapedCommas()
    {
        String expectedString = "Hello, Bob and Charlie, Dianne.";
        String[] names = {"Bob", "\"Charlie, Dianne\""};

        assertEquals(expectedString, TDDLab.greet(names));
    }
}
