import React from "react";
// import logo from './logo.svg';
// import './App.css';

export default class App extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/teams";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data[0]);

  this.setState({ team: data[0].City, loading: false});

}

  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div>
          <p>Teams: </p>
          <div>{this.state.team.City}</div>
          </div>
      )}
      </div>
    );    
  }
}

