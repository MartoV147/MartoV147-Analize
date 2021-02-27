package services;
import java.util.ArrayList;
import model.Character;


public class SearchService 
{
	
	public static String find(String Name)
	{
		if (Name == null || Name.isEmpty()) 
		{
			return "Моля, въведете име";
		}
		

		final ArrayList<Character> characters = getCharacters();
		final boolean isCharacterFound = characters.stream().anyMatch(character -> 
		character.getName().equals(Name));
		return isCharacterFound? "Героят е намерен успешно" : "Героят не е намерен";
	}

	public static ArrayList<Character> getCharacters() {
		final Character c = new Character();
		c.setName("Gosho");
		c.setRace("Elf");
		c.setRole("Druid");
		final ArrayList<Character> result = new ArrayList<Character>();
		result.add(c);
		return result;
	}

}