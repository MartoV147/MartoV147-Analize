package screenmodels;
import services.SearchService;

public class SearchScreenModel 
{
	private String Name;
	private String message;


	public void navigateToMe()
	{
		System.out.println("Отворен е прозорецът за търсене на герои!");
	}

	public void setName(String Name) 
	{
		this.Name = Name;
	}
	
	public void clickSearchButton() 
	{
		message = SearchService.find(Name);
	}

	public String getSearchMessage() {
		return message;
	}
}