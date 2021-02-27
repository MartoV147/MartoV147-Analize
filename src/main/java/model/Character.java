package model;

public class Character 
{
    private String Name;
    private String Role;
    private String Race;
    private int Level;

    public User user;
    
    public Character() 
    {
    	
    }

    public String getName() 
    {
    	return this.Name;
    }

    public void setName(String name) 
    {
    	this.Name = name;
    }

    public String getRole() 
    {
    	return this.Role;	
    }

    public void setRole(String role) 
    {
    	this.Role = role;
    }

    public String getRace()
    {
    	return this.Race;
    }

    public void setRace(String race) 
    {
    	this.Race = race;
    }

    public int getLevel() 
    {
    	return this.Level;
    }

    public void setLevel(int level) 
    {
    	this.Level = level;
    }

}