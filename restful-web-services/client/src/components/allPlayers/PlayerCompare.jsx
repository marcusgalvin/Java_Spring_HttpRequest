import React from "react";
// import logo from './logo.svg';
// import './App.css';

export default class playerCompare extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/players";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  this.setState({ team: data[0], loading: false});


}


  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div>
			
		
		<div className="teamInfo">		
          <p>Name: {this.state.team.FirstName} {this.state.team.LastName}</p>		  
          
          <p>Position: {this.state.team.Position}</p>
          <p>Team: {this.state.team.Team}</p>
		</div>


          </div>
      )}
      </div>
    );    
  }
}