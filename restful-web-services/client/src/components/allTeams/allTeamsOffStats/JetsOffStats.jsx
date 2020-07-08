import React from "react";
// import logo from './logo.svg';
// import './App.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class JetsOffStats extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/allTeamsOffStats";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  this.setState({ team: data[24], loading: false});
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
        <CardImg top width="100%" src="https://www.gannett-cdn.com/-mm-/6942229a2ce6dce8e064cae2f2259f5f34f2cae1/c=0-0-1200-675/local/-/media/2019/11/24/Bergen/usatsi_13706766-e1574627427594.jpg?width=1200&height=600&fit=crop&format=pjpg&auto=webp" alt="Card image cap" />
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