import React from "react";
// import logo from './logo.svg';
// import './App.css';
import PatriotsNews from "./TeamNews/PatriotsNews";
import PatriotsDefStats from "./allTeamsDefStats/PatriotsDefStats";
import PatriotsOffStats from "./allTeamsOffStats/PatriotsOffStats";

export default class NewEnglandPatriots extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/teams";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  this.setState({ team: data[21], loading: false});


}

  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div className="billFullPage">
			<div className="patsBanner">
				</div>
		
		<div className="billsContainer">


		<div className="allTeamInfo">		
          <h3>{this.state.team.City} {this.state.team.Name}</h3>		  
          <p>Head Coach: {this.state.team.HeadCoach}</p>
          <p>Conference: {this.state.team.Conference}</p>
          Team Color: <div className="teamColor"></div>
		</div>

<div className="feedsContainer">

		<div className="teamFeed">
			<p>Team News Feed</p>
			<PatriotsNews/>
			
		</div>

		<div className="defStats">
			<p>Defensive Stats:</p>
        <PatriotsDefStats/>
			</div>

<div className="defStats">
			<p>Offensive Stats:</p>
			<PatriotsOffStats/>

			</div>

			</div>

		</div>


          </div>
      )}
      </div>
    );    
  }
}