import React from "react";
// import logo from './logo.svg';
// import './App.css';

export default class PatriotsOffStats extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/allTeamsOffStats";
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
        <div>
			

		<div className="billsDefStats">
		  <p>Season: {this.state.team.Season}</p>	
          <p>Completion Percentage: {this.state.team.CompletionPercentage}%</p>
		  <p>First Downs by Passing: {this.state.team.FirstDownsByPassing}</p>
		  <p>First Downs by Rushing: {this.state.team.FirstDownsByRushing}</p>
		  <p>Fumbles: {this.state.team.Fumbles}</p>
	      <p>Fumble Return Yards: {this.state.team.FumbleReturnYards}</p>
		  <p>Amount of Punts: {this.state.team.Punts}</p>
		  <p>Offensive Yards: {this.state.team.OffensiveYards}</p>
		  <p>Passing Yards: {this.state.team.PassingYards}</p>
		  <p>Rushing Yards: {this.state.team.RushingYards}</p>
		  <p>Touch Downs Scored: {this.state.team.Touchdowns}</p>
		

	  
		</div>

	
  

		

		


          </div>
      )}
      </div>
    );    
  }
}