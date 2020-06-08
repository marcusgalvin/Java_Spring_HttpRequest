import React from "react";
// import logo from './logo.svg';
// import './App.css';

export default class ArizonaCardinals extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/teams";
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
          <button onClick="componentDidMount()"></button>
          <div>{this.state.team.City}</div>
          <div>{this.state.team.Name}</div>
          <div>{this.state.team.HeadCoach}</div>
          <div>{this.state.team.Conference}</div>
          <div>{this.state.team.PrimaryColor}</div>
          <div>{this.state.team.WikipediaLogoUrl}</div>
          

          </div>
      )}
      </div>
    );    
  }
}