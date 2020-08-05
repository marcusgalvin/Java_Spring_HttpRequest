import React from "react";
import CardinalsNews from "./TeamNews/CardinalsNews";
import CowboysDefStats from "./allTeamsDefStats/CowboysDefStats";
import CowboysOffStats from "./allTeamsOffStats/CowboysOffStats";
import axios from 'axios';

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
      this.setState({ team: data[8], loading: false});
  })
}


  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div className="billFullPage">
			<div className="cowboysBanner">
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
			<CowboysDefStats/>

			</div>

<div className="defStats">
			<p>Offensive Stats:</p>
			<CowboysOffStats/>

			</div>

			</div>

		</div>


          </div>
      )}
      </div>
    );    
  }
}