import java.util.ArrayList;

public class TDDLab {

    public static String greet(String name) {
        if (!isAllUpper(name)) {
            return "Hello, " + name + ".";
        } else {
            return "HELLO " + name + "!";
        }
    }

    public static String[] stringContainsComma(String[] names)
    {
        ArrayList<String> namesSplitAtCommas = new ArrayList<String>();
        String[] split;

        for (String name : names)
        {
            if (name.charAt(0) == '"' && name.charAt(name.length() - 1) == '"') {
                namesSplitAtCommas.add(name.substring(1, name.length() - 1));
                continue;
            }

            split = name.split(",");
            for (String s : split)
            {
                namesSplitAtCommas.add(s.trim());
            }
        }
        return namesSplitAtCommas.toArray(new String[0]);
    }

    public static String greet(String[] names) {
        ArrayList<String> greetingNames = new ArrayList<String>();
        ArrayList<String> shoutingNames = new ArrayList<String>();
        String greetingReturn = "";
        String ShoutingReturn = "";

        for (int i = 0; i < names.length; i++)
        {
            if (names[i].contains(","))
            {
                names = stringContainsComma(names);
                break;
            }

        }

        for (String name : names) {

            if (!isAllUpper(name)) {
                greetingNames.add(name);
            } else {
                shoutingNames.add(name);
            }
        }

        for (int i = 0; i < greetingNames.size(); i++)
        {
            if (i == greetingNames.size() - 1 && greetingNames.size() > 1)
            {
                if (greetingNames.size() > 2)
                    greetingReturn += ", and " + greetingNames.get(i) + ".";
                else
                    greetingReturn += " and " + greetingNames.get(i) + ".";
            }
            else if (i == 0)
            {
                greetingReturn += "Hello, " + greetingNames.get(i);
            }
            else
            {
                greetingReturn += ", " + greetingNames.get(i);
            }
        }

        for (int i = 0; i < shoutingNames.size(); i++)
        {
            if (i == shoutingNames.size() - 1 && shoutingNames.size() > 1)
            {
                if (shoutingNames.size() > 2)
                    ShoutingReturn += ", AND " + shoutingNames.get(i);
                else
                    ShoutingReturn += " AND " + shoutingNames.get(i);
            }
            else if (i == 0 && greetingNames.size() != 0)
            {
                ShoutingReturn += " AND HELLO " + shoutingNames.get(i);
            }
            else
            {
                ShoutingReturn += ", " + shoutingNames.get(i);
            }
        }
        if (shoutingNames.size() != 0)
        {
            ShoutingReturn += "!";
        }

        return greetingReturn + ShoutingReturn;
    }

    public static String greet() {
        return "Hello, my friend.";
    }

    private static boolean isAllUpper(String name) {
        for (char c : name.toCharArray()) {
            if (Character.isLetter(c) && Character.isLowerCase(c)) {
                return false;
            }
        }
        return true;
    }

}
