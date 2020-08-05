import React from "react";
import axios from 'axios';
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
  axios.get(url).then(res => {
    const data = res.data;
    // console.log(data)
      this.setState({ team: data[1], loading: false});
  })
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
          <h3>{this.state.team.City} {this.state.team.Name}</h3>		  
          <p>Head Coach: {this.state.team.HeadCoach}</p>
          <p>Conference: {this.state.team.Conference}</p>
          Team Color: <div className="falconsColor"></div>
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