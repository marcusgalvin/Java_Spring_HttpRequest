import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import App from "../c"
import CarouselComponent from "./CarouselComponent"
import RouteCards from "./RouteCards";
import LandingPageBanner from "./LandingPageBanner"

export default class WelcomeComponent extends React.Component {

  


  render(){
    return (
		
		<div className="logout-container">
			{/* <CarouselComponent/> */}
			<LandingPageBanner/>
			<RouteCards/>
			
		</div>

    
	  
    )    
  }
}



