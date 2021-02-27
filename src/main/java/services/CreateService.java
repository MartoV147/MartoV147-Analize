package services;
import model.Character;

public class CreateService 
{
	public static String create(String Name, String Role, String Race, String Level)
	{
	
		if (Name == null && Role == null && Race == null && Level == null) 
		{
			return "Не сте въвели данни!";
		}
		
		if (Name == null || Name.isEmpty()) 
		{
			return "Моля, въведете име";
		}
		
		if (Role == null || Role.isEmpty()) 
		{
			return "Моля, въведете роля";
		}
		
		if (Race == null || Race.isEmpty()) 
		{
			return "Моля, въведете раса";
		}
		
		int lvl = 0;
		
		try 
		{
			lvl = Integer.parseInt(Level);
		}
		catch(Exception e) 
		{
			return "Моля, въведете ниво";
		}
		
		if (lvl <= 0) 
		{
			return "Моля, въведете ниво";
		} 

		Character c = new Character();
		c.setName(Name);
		c.setRole(Role);
		c.setRace(Race);
		c.setLevel(lvl);
		
		return "Героят е създаден успешно";
	}
}
