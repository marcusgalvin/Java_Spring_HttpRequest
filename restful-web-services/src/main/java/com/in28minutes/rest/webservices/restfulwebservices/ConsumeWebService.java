package com.in28minutes.rest.webservices.restfulwebservices;

import java.awt.PageAttributes.MediaType;
import java.net.http.HttpHeaders;
import java.util.Arrays;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class ConsumeWebService {
	
	@Autowired
	   RestTemplate restTemplate;
	
	
	
//	public String getName() {
//	    return Name;
//	  }
	
	
	@GetMapping(path="/players")
	private static String getEmployees(String Name)
	{
		
//		public String Name;
		
	    final String uri = "https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=014ecc9bac8a4a5d94b6625f3fdcf910";

	    RestTemplate restTemplate = new RestTemplate();
	    String teams = restTemplate.getForObject(uri, String.class);
	    
	    return "Team: " + Name;	    


//	    System.out.println(teams);
	   
	}
	
	
	

    
	
	
	
	
	
	
	
	
	
}
