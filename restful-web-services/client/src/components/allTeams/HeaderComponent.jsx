import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import App from "../c"
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import AuthenticationService from "../../AuthenticationService";



export default class HeaderComponent extends React.Component {

  render(){
	  const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
	  console.log(isUserLoggedIn);

    return (
		<header>
			<nav className="navbar navbar-expand-md">
				{/* <div><a>test</a></div> */}
				<ul class="navbar-nav">
					<li className="nav-link"><Link to="/teamClickIcons/MarcusGalvin">Team Stats</Link></li>
					<li className="nav-link"><Link to="/PlayerCompare">Ranks</Link></li>
				</ul>
				<ul className="navbar-nav navbar-collapse justify-content-end">
					<li className="nav-link"><Link to="/login">Login</Link></li>
					<li className="nav-link"><Link to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>
				</ul>
			</nav>
		</header>


    
	  
    );    
  }
}
