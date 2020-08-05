import React from "react";
import BillsNews from "./TeamNews/BillsNews";
import BillsDefStats from "./allTeamsDefStats/BillsDefStats";
import BillsOffStats from "./allTeamsOffStats/BillsOffStats";
import axios from 'axios';

export default class BuffaloBills extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/teams";
  axios.get(url).then(res => {
    const data = res.data;
    // console.log(data)
      this.setState({ team: data[3], loading: false});
  })
}


  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div className="billFullPage">
			<div className="billsBanner">
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
			<BillsNews/>
			
		</div>

		<div className="defStats">
			<p>Defensive Stats:</p>
			<BillsDefStats/>

			</div>

<div className="defStats">
			<p>Offensive Stats:</p>
			<BillsOffStats/>

			</div>

			</div>

		</div>


          </div>
      )}
      </div>
    );    
  }
}