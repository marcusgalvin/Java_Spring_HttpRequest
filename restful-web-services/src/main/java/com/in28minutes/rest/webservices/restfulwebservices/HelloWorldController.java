package com.in28minutes.rest.webservices.restfulwebservices;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.awt.PageAttributes.MediaType;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.json.JSONArray;
import org.json.JSONObject;

//controller - handles http requests
@RestController
public class HelloWorldController {
	
	//GET
	//URI = /hello-world
	//method = helloWorld
	
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	//hello-world, create bean
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World");
	}
	
//public static void main(String[] args) {
//	
//		
//		//method two to connect to api - async method - java 11 or later
////		
//		HttpClient client = HttpClient.newHttpClient();
//		HttpRequest request = HttpRequest.newBuilder()
//				.uri(URI.create("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=014ecc9bac8a4a5d94b6625f3fdcf910")).build();
//		client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
//				.thenApply(HttpResponse::body)
//				.thenApply(HelloWorldController::parse)
//				.join();		
//
//	}
//@GetMapping(path = "/players")
//public static String parse(String responseBody) {
//	JSONArray teams = new JSONArray(responseBody);
//	
//	for(int i = 0; i < teams.length(); i++) {
//		JSONObject team = teams.getJSONObject(i);
//		int id = team.getInt("TeamID");
//		String name = team.getString("Name");
//		String city = team.getString("City");
//		String division = team.getString("Conference");
//		
//		System.out.println("Team Id: " + id + '\n' + city + " " + name + '\n' + "Conference: " + division);
//		System.out.println("--------------------");
//	}
//	return "hello player";
//	
//}
	
	private static void getEmployees()
	{
	    final String uri = "http://localhost:8080/springrestexample/employees.xml";

	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);

	    System.out.println(result);
	}

	
	
	
	
	
	
	
	
	

}
