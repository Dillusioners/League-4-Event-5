class RansomNote {
 
	public static boolean canConstruct(String ransomNote, String magazine) {
		int length1 = ransomNote.length();
		int length2 = magazine.length();
		if (length1 > length2)
			return false;
		char[] ranChar = ransomNote.toCharArray();
		for (char char_ransom : ranChar) {
			if (magazine.contains(Character.toString(char_ransom)))
				magazine = magazine.replaceFirst(Character.toString(char_ransom), "");
			else
				return false;
		}
		return true;
 
	}
 
	public static void main(String[] args) {
		System.out.println(canConstruct("aa", "aab"));
		System.out.println(canConstruct("cdc", "ccd"));
		System.out.println(canConstruct("abc", "abd"));
		System.out.println(canConstruct("bfhh", "a"));
		System.out.println(canConstruct("swastik", "kitsaws"));
 
	}
 
}
