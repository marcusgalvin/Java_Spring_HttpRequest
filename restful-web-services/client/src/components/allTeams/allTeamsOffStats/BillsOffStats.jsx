import React from "react";
import axios from 'axios';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class BillsOffStats extends React.Component {

  state = {
    loading: true,
    team : null
    
  }
async componentDidMount(){
  const url = "http://localhost:8080/allTeamsOffStats";
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
        <div>
			

		<div className="billsDefStats">
		  



      <Card className="info">
        <CardImg top width="100%" src="https://cdn.vox-cdn.com/thumbor/_R1uqLfcqhFiTevslV2-amg9r2U=/0x0:2000x1000/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/19426081/bills_qb_josh_allen.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Offensive Statistics</CardTitle>
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
        </CardBody>
      </Card>
		

	  
		</div>

	
  

		

		


          </div>
      )}
      </div>
    );    
  }
}