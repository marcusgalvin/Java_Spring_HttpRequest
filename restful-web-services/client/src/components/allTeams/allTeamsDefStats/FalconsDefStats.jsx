import React from "react";
// import logo from './logo.svg';
// import './App.css';

export default class FalconsDefStats extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/falconsDefStats";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  

  this.setState({ team: data, loading: false});


}

  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div>
			

		<div className="billsDefStats">		
          <p>Points Allowed: {this.state.team.PointsAllowed}</p>
		  <p>TouchDowns Scored: {this.state.team.TouchdownsScored}</p>
          <p>Solo Tackles: {this.state.team.SoloTackles}</p>
          <p>Sacks: {this.state.team.Sacks}</p>
          <p>Interceptions: {this.state.team.Interceptions}</p>
		  <p>QB FantasyPointsAllowed: {this.state.team.QuarterbackFantasyPointsAllowed}</p>
          <p>Tackles of loss: {this.state.team.TacklesForLoss}</p>
          <p>Defensive TouchDowns: {this.state.team.DefensiveTouchdowns}</p>
         
		</div>

		

		


          </div>
      )}
      </div>
    );    
  }
}