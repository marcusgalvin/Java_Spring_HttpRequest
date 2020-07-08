import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import App from "../c"
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


export default class Logout extends React.Component {

  


  render(){
    return (
		
		<div className="logout-container">
			
			<h1>You are Logged Out</h1>
			<p>Thank you for using our application</p>
			<br/>
			<br/>
			<p>For more useful NFL API's and Developer Info Check out these links</p>
			 <ul>
				<li>"Github.com/marcusgalvin"</li>
			    <li>"SportsData.io</li>

			 </ul>
		</div>

    
	  
    )    
  }
}
