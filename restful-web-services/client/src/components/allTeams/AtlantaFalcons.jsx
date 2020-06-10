import React from "react";
// import logo from './logo.svg';
// import './App.css';
import FalconsNews from "./TeamNews/FalconsNews";
import FalconsDefStats from "./allTeamsDefStats/FalconsDefStats";
import FalconsOffStats from "./allTeamsOffStats/FalconsOffStats";

export default class ArizonaCardinals extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/teams";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  this.setState({ team: data[1], loading: false});


}

  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div className="billFullPage">
			<div className="falconsBanner">
				</div>
		
		<div className="billsContainer">


		<div className="allTeamInfo">		
          <p>{this.state.team.City} {this.state.team.Name}</p>		  
          <p>Head Coach: {this.state.team.HeadCoach}</p>
          <p>Conference: {this.state.team.Conference}</p>
          Team Color: <div className="teamColor"></div>
		</div>

<div className="feedsContainer">

		<div className="teamFeed">
			<p>Team News Feed</p>
			<FalconsNews/>
			
		</div>

		<div className="defStats">
			<p>Defensive Stats:</p>
        <FalconsDefStats/>
			</div>

<div className="defStats">
			<p>Offensive Stats:</p>
			<FalconsOffStats/>

			</div>

			</div>

		</div>


          </div>
      )}
      </div>
    );    
  }
}