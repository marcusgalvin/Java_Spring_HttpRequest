import React from "react";
import CardinalsNews from "./TeamNews/CardinalsNews";
import MiamiDefStats from "./allTeamsDefStats/MiamiDefStats";
import MiamiOffStats from "./allTeamsOffStats/MiamiOffStats";
import axios from 'axios';
export default class MiamiDolphins extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/teams";
  axios.get(url).then(res => {
    const data = res.data;
    // console.log(data)
      this.setState({ team: data[19], loading: false});
  })
}



  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div className="billFullPage">
			<div className="dolphinsBanner">
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
			<MiamiDefStats/>

			</div>

<div className="defStats">
			<p>Offensive Stats:</p>
			<MiamiOffStats/>

			</div>

			</div>

		</div>


          </div>
      )}
      </div>
    );    
  }
}