package com.in28minutes.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BasicAuthenticationController{
	
	//GET
	//URI = /hello-world
	//method = helloWorld
	
//	@GetMapping(path = "/hello-world")
//	public String helloWorld() {
//		return "Hello World";
//	}
	
	//hello-world, create bean
	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("you are authenticated");
	}
	
//	@GetMapping(path="/hello-world/path-variable/{name}")
//	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
//		return new HelloWorldBean(String.format("Hello World, %s", name));
//	}
//	
	
	
	
	
	
	
	
	

}
