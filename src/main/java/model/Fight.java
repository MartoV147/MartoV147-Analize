package model;
import java.util.*;


public class Fight 
{
	private ArrayList<Character> Characters;
    private ArrayList<Monster> Monsters;
    private String Terrain;
    private double Price;

    public Fight() 
    {
    	
    }

    public ArrayList<Character> getCharacters() 
    {
    	return this.Characters;
    }

    public void setCharacters(ArrayList<Character> characters) 
    {
    	this.Characters = characters;
    }

    public ArrayList<Monster> getMonsters() 
    {
    	return this.Monsters;
    }

    public void setMonsters(ArrayList<Monster> monsters) 
    {
    	this.Monsters = monsters;
    }

    public String getTerrain() 
    {
    	return this.Terrain;
    }

    public void setTerrain(String terrain) 
    {
    	this.Terrain = terrain;
    }

    public double getPrice() 
    {
    	return this.Price;
    }

    public void setPrice(double price) 
    {
    	this.Price = price;
    }
}