import React from "react";
// import logo from './logo.svg';
// import './App.css';


import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class SeaHawksDefStats extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/allTeamsDefStats";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  

  this.setState({ team: data[27], loading: false});


}

  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div>
			

		<div className="billsDefStats">		
       
          <Card className="info">
        <CardImg top width="100%" src="https://www.steelcityunderground.com/wp-content/uploads/2019/09/Rudolph045_RegWk02_Seahawks-1200x600.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Defensive Statistics</CardTitle>
            <p>Season: {this.state.team.Season}</p>	
            <p>Points Allowed: {this.state.team.PointsAllowed}</p>
		        <p>TouchDowns Scored: {this.state.team.TouchdownsScored}</p>
            <p>Solo Tackles: {this.state.team.SoloTackles}</p>
            <p>Sacks: {this.state.team.Sacks}</p>
            <p>Interceptions: {this.state.team.Interceptions}</p>
		        <p>QB FantasyPointsAllowed: {this.state.team.QuarterbackFantasyPointsAllowed}</p>
            <p>Tackles of loss: {this.state.team.TacklesForLoss}</p>
            <p>Defensive TouchDowns: {this.state.team.DefensiveTouchdowns}</p>
        </CardBody>
      </Card>
         
		</div>

		

		


          </div>
      )}
      </div>
    );    
  }
}