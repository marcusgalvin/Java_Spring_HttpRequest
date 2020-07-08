import React from "react";
// import logo from './logo.svg';
// import './App.css';


import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class SanFranDefStats extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/allTeamsDefStats";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  

  this.setState({ team: data[28], loading: false});


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
        <CardImg top width="100%" src="https://cdn.vox-cdn.com/thumbor/aytu3K_A60ua9wQtDmmvoChh5tc=/0x0:3058x1529/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/19324001/1183830308.jpg.jpg" alt="Card image cap" />
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