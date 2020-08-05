import React from "react";
import axios from 'axios';


import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class BillsDefStats extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/billsDefStats";
  axios.get(url).then(res => {
    const data = res.data;
    // console.log(data)
      this.setState({ team: data, loading: false});
  })
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
        <CardImg top width="100%" src="https://cdn.vox-cdn.com/thumbor/_jFZhjd6SHzPyccBowMnuRtYOf0=/0x278:3321x1939/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/13283189/usa_today_11397178.jpg" alt="Card image cap" />
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