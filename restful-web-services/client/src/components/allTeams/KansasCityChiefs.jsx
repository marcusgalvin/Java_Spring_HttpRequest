import React from "react";
import CardinalsNews from "./TeamNews/CardinalsNews";
import CardinalsDefStats from "./allTeamsDefStats/CardinalsDefStats";
import CardinalsOffStats from "./allTeamsOffStats/CardinalsOffStats";
// import logo from './logo.svg';
// import './App.css';

export default class KansasCityChiefs extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/teams";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  

  this.setState({ team: data[15], loading: false});


}

  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div className="billFullPage">
			<div className="chiefsBanner">
				</div>
		
		<div className="billsContainer">


		<div className="billsTeamInfo">		
          <h3>{this.state.team.City} {this.state.team.Name}</h3>		  
          <p>Head Coach: {this.state.team.HeadCoach}</p>
          <p>Conference: {this.state.team.Conference}</p>
          Team Color: <div className="teamColor"></div>
		</div>

<div className="feedsContainer">

		<div className="teamFeed">
			<p>Team News Feed</p>
			<CardinalsNews/>
			
		</div>

		<div className="defStats">
			<p>Defensive Stats:</p>
			<CardinalsDefStats/>

			</div>

<div className="defStats">
			<p>Offensive Stats:</p>
			<CardinalsOffStats/>

			</div>

			</div>

		</div>


          </div>
      )}
      </div>
    );    
  }
}