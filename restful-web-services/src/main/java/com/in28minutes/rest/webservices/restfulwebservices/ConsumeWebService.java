package com.in28minutes.rest.webservices.restfulwebservices;
import com.in28minutes.rest.webservices.restfulwebservices.Message;



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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParser;

@RestController
public class ConsumeWebService {
	
	@Autowired
	   RestTemplate restTemplate;
	
	
//test
	@RequestMapping("/greeting")
    public Message greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Message(name);
    }
	

//get teams from api endpoint	
@GetMapping(path="/teams")
public static String getTeams() {
		
		HttpClient client = HttpClient.newHttpClient();
		HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=d83e5f3f5eb4447c9c175a0aa2319872")).build();
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
			String primaryColor = team.getString("PrimaryColor");
			String logoUrl = team.getString("WikipediaLogoUrl");
//		
			System.out.println("Team Id: " + id + '\n' + city + " " + name + '\n' + "Coach: " + coach + '\n' 
					+ "Conference: " + division +  '\n' + "PrimaryTeamColor: " + primaryColor + '\n' + "Logo URL: " + logoUrl
					);
			System.out.println("--------------------");
			
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

			}
			return responseBody;
			
		}
		
		
//bills news info
		@GetMapping(path="/billsNews")
		public static String getBillsNews() {
				
				HttpClient client = HttpClient.newHttpClient();
				HttpRequest request = HttpRequest.newBuilder()
						.uri(URI.create("https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/BUF?key=d83e5f3f5eb4447c9c175a0aa2319872")).build();
				return client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
						.thenApply(HttpResponse::body)
						.thenApply(ConsumeWebService::parseBillsNews)
						.join();


			}

			public static String parseBillsNews(String responseBody) {
				JSONArray billsNews = new JSONArray(responseBody);
				
							
				for(int i = 0; i < billsNews.length(); i++) {
					JSONObject player = billsNews.getJSONObject(i);
				}
				return responseBody;
				
			}
	

//bills defense stats
			@GetMapping(path="/billsDefStats")
			public static String getBillsDefStats() {
					
					HttpClient client = HttpClient.newHttpClient();
					HttpRequest request = HttpRequest.newBuilder()
							.uri(URI.create("https://api.sportsdata.io/v3/nfl/stats/json/FantasyDefenseBySeasonByTeam/2019/BUF?key=d83e5f3f5eb4447c9c175a0aa2319872")).build();
					return client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
							.thenApply(HttpResponse::body)
							.join();
				}
			
			
//falcons defense stats
			@GetMapping(path="/falconsDefStats")
			public static String getFalconsDefStats() {
					
					HttpClient client = HttpClient.newHttpClient();
					HttpRequest request = HttpRequest.newBuilder()
							.uri(URI.create("https://api.sportsdata.io/v3/nfl/stats/json/FantasyDefenseBySeasonByTeam/2019/ATL?key=d83e5f3f5eb4447c9c175a0aa2319872")).build();
					return client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
							.thenApply(HttpResponse::body)
							.join();
				}
			
//pats def stats
			@GetMapping(path="/patriotsDefStats")
			public static String getPatriotsDefStats() {
					
					HttpClient client = HttpClient.newHttpClient();
					HttpRequest request = HttpRequest.newBuilder()
							.uri(URI.create("https://api.sportsdata.io/v3/nfl/stats/json/FantasyDefenseBySeasonByTeam/2019/NE?key=d83e5f3f5eb4447c9c175a0aa2319872")).build();
					return client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
							.thenApply(HttpResponse::body)
							.join();
				}
						
//teams offense stats
			
			@GetMapping(path="/allTeamsOffStats")
			public static String getBillsOffStats() {
					
					HttpClient client = HttpClient.newHttpClient();
					HttpRequest request = HttpRequest.newBuilder()
							.uri(URI.create("https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/2019?key=d83e5f3f5eb4447c9c175a0aa2319872")).build();
					return client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
							.thenApply(HttpResponse::body)
							.join();
				}
			
//falcons team news api
			
			
			@GetMapping(path="/falconsNews")
			public static String getFalconsNews() {
					
					HttpClient client = HttpClient.newHttpClient();
					HttpRequest request = HttpRequest.newBuilder()
							.uri(URI.create("https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/ATL?key=d83e5f3f5eb4447c9c175a0aa2319872")).build();
					return client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
							.thenApply(HttpResponse::body)
							.join();
				}
			
//pats news
						
			@GetMapping(path="/patriotsNews")
			public static String getPatriotsNews() {
					
					HttpClient client = HttpClient.newHttpClient();
					HttpRequest request = HttpRequest.newBuilder()
							.uri(URI.create("https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/NE?key=d83e5f3f5eb4447c9c175a0aa2319872")).build();
					return client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
							.thenApply(HttpResponse::body)
							.join();
				}
			
//all team def stats 
			@GetMapping(path="/allTeamsDefStats")
			public static String getallTeamsDefStats() {
					
					HttpClient client = HttpClient.newHttpClient();
					HttpRequest request = HttpRequest.newBuilder()
							.uri(URI.create("https://api.sportsdata.io/v3/nfl/stats/json/FantasyDefenseBySeason/2019?key=d83e5f3f5eb4447c9c175a0aa2319872")).build();
					return client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
							.thenApply(HttpResponse::body)
							.join();
				}
	
	
	
	
	
	
	
	
	
}
