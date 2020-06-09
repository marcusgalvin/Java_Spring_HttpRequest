import React from "react";
import BillsNews from "./TeamNews/BillsNews";
// import logo from './logo.svg';
// import './App.css';

export default class BuffaloBills extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/teams";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  

  this.setState({ team: data[3], loading: false});


}

  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div>
			<div className="billsBanner">
				</div>
		
		<div className="billsContainer">


		<div className="billsTeamInfo">		
          <p>{this.state.team.City} {this.state.team.Name}</p>		  
          <p>Head Coach: {this.state.team.HeadCoach}</p>
          <p>Conference: {this.state.team.Conference}</p>
          <p>Team Color: {this.state.team.PrimaryColor}</p>
		</div>

		<div className="teamFeed">
			<p>team feed</p>
			<BillsNews/>

		</div>

		</div>


          </div>
      )}
      </div>
    );    
  }
}