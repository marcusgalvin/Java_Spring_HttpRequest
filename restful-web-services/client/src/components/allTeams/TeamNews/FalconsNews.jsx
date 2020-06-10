import React from "react";
// import logo from './logo.svg';
// import './App.css';

export default class FalconsNews extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/falconsNews";
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
			

		<div className="billsNews">		
          <p>{this.state.team.Title}</p>
		  <p>{this.state.team.Content}</p>
          <p>Date: {this.state.team.TimeAgo}</p>
          <p>Source: {this.state.team.Source}</p>

		  

          
		</div>

		

		


          </div>
      )}
      </div>
    );    
  }
}