package screenmodels;

import services.CreateService;

public class CreateScreenModel 
{
	private String Name;
	private String Role;
	private String Race;
	private String Level;
	private String message;
	

	public void navigateToMe()
	{
		System.out.println("Отворен е прозорецът за създаване на герои!");
	}

	public void setName(String Name) 
	{
		this.Name = Name;
	}

	public void setRole(String Role) 
	{
		this.Role=Role;		
	}

	public void setRace(String Race) 
	{
		this.Race = Race;
	}

	public void setLevel(String Level) 
	{
		this.Level=Level;		
	}

	public void clickCreateButton() 
	{
		message = CreateService.create(Name, Role, Race, Level);
	}

	public String getCreateMessage() {
		return message;
	}
}
