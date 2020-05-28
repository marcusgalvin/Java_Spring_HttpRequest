package com.in28minutes.rest.webservices.restfulwebservices;

import java.awt.PageAttributes.MediaType;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpHeaders;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Arrays;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParser;

@RestController
public class ConsumeWebService {
	
	@Autowired
	   RestTemplate restTemplate;
	

//get teams from api endpoint	
@GetMapping(path="/teams")
public static String getTeams() {
		
		HttpClient client = HttpClient.newHttpClient();
		HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=014ecc9bac8a4a5d94b6625f3fdcf910")).build();
		return client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
				.thenApply(HttpResponse::body)
				.thenApply(ConsumeWebService::parse)
				.join();
	}

	public static String parse(String responseBody) {
		JSONArray teams = new JSONArray(responseBody);
		
		
		
		for(int i = 0; i < teams.length(); i++) {
			JSONObject team = teams.getJSONObject(i);
			int id = team.getInt("TeamID");
			String name = team.getString("Name");
			String city = team.getString("City");
			String coach = team.getString("HeadCoach");
			String division = team.getString("Conference");
			
			System.out.println("Team Id: " + id + '\n' + city + " " + name + '\n' + "Coach: " + coach + '\n' + "Conference: " + division);
			System.out.println("--------------------");
						
//			return name;
		}
		return responseBody;
		
	}
	
	
	
//	get players from api
	@GetMapping(path="/players")
	public static String getPlayers() {
			
			HttpClient client = HttpClient.newHttpClient();
			HttpRequest request = HttpRequest.newBuilder()
					.uri(URI.create("https://api.sportsdata.io/v3/nfl/scores/json/Players?key=014ecc9bac8a4a5d94b6625f3fdcf910")).build();
			return client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
					.thenApply(HttpResponse::body)
					.thenApply(ConsumeWebService::parsePlayerData)
					.join();


		}

		public static String parsePlayerData(String responseBody) {
			JSONArray players = new JSONArray(responseBody);
			
						
			for(int i = 0; i < players.length(); i++) {
				JSONObject player = players.getJSONObject(i);
				int playerId = player.getInt("PlayerID");
				String firstName = player.getString("FirstName");
				String LastName = player.getString("LastName");
				String position = player.getString("Position");
				
//				return firstName;
				

			}
			return responseBody;
			
		}
		
	
	
	
	
	

    
	
	
	
	
	
	
	
	
	
}
