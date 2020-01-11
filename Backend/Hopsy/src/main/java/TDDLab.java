import java.util.ArrayList;
import java.util.Arrays;

public class TDDLab {
    public static String greet(String name) {
        if (name == null) {
            return "Hello, my friend.";
        } else if (isUpper(name)) {
            return "HELLO " + name + "!";
        }
        return "Hello, " + name + ".";
    }

    public static String greet(String[] names) {
        String greet = "";
        String lower[] = Arrays.stream(names).filter(s -> !isUpper(s)).toArray(String[]::new);
        String upper[] = Arrays.stream(names).filter(s -> isUpper(s)).toArray(String[]::new);

        int nLowerNames = 0;
        for (String n : lower) {
            if (!n.startsWith("\"") && !n.endsWith("\""))
                nLowerNames += n.split("\\s*,\\s*").length;
            else
                nLowerNames++;
        }

        // lower case print
        if (nLowerNames == 2) {
            lower[0] = lower[0].replace("\"", "");
            lower[1] = lower[1].replace("\"", "");
            greet += "Hello, " + lower[0] + " and " + lower[1] + ".";
        }
        else  if (lower.length >= 2) {
            greet += "Hello, ";
            for (int i = 0; i < lower.length; i++) {
                if (!lower[i].startsWith("\"") && !lower[i].endsWith("\"")) {
                    String[] split = lower[i].split("\\s*,\\s*");
                    for (int j = 0; j < split.length; j++) {
                        if (i + j == nLowerNames-1) {
                            greet += "and " + split[j] + ".";
                        }
                        else {
                            greet += split[j] + ", ";
                        }
                    }
                }
                else {
                    lower[i] = lower[i].replace("\"", "");
                    if (i == nLowerNames-1) {
                        greet += "and " + lower[i] + ".";
                    }
                    else {
                        greet += lower[i] + ", ";
                    }
                }
            }
        }


        // upper case print
        if (upper.length > 1) {
            greet = " AND HELLO ";
            for (int i = 0; i < upper.length - 1; i++) {
                greet += " " + upper[i] + ",";
            }
            return greet + " and " + upper[upper.length-1] + ".";
        }
        else if (upper.length > 0) {
            greet += " AND HELLO " + upper[0] + "!";
        }


        return greet;
    }

    public static boolean isUpper(String s)
    {
        for(char c : s.toCharArray())
        {
            if(! Character.isUpperCase(c))
                return false;
        }
        return true;
    }
}
