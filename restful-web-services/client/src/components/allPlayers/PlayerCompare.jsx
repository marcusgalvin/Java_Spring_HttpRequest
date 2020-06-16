import React from "react";
// import logo from './logo.svg';
// import './App.css';

export default class playerCompare extends React.Component {

  state = {
    loading: true,
    team : null,
    
    
  }


async componentDidMount(){
  const url = "http://localhost:8080/allTeamsDefStats";
  const response = await fetch(url);
   var data = await response.json();
  console.log(data);

  this.setState({ team: data, loading: false});


for(var i = 0; i < data.length; i++){

  console.log(data[0]);
}













  // console.log(data[0].PointsAllowed);
  // console.log(data[1].PointsAllowed);

  // var ArizonaCardinals = data[0];
  // var AtlantaFalcons = data[1];

  //points allowed
  // if(ArizonaCardinals.PointsAllowed > AtlantaFalcons.PointsAllowed){
  //   console.log(ArizonaCardinals.Team + " has allowed more points scored than " + AtlantaFalcons.Team)
  // } else if(ArizonaCardinals.PointsAllowed < AtlantaFalcons.PointsAllowed) {
  //   console.log(AtlantaFalcons + " have allowed more points scored than " + ArizonaCardinals.Team)
  // }

  //touchdowns allowed
  // if(ArizonaCardinals.TouchdownsScored > AtlantaFalcons.TouchdownsScored){
  //   console.log(ArizonaCardinals.Team + " has scored more defensive Touchdowns than " + AtlantaFalcons.Team)
  // } else if(ArizonaCardinals.TouchdownsScored < AtlantaFalcons.TouchdownsScored) {
  //   console.log(AtlantaFalcons.Team + " have scored more defensive Touchdowns than " + ArizonaCardinals.Team)
  // } else if(ArizonaCardinals.TouchdownsScored == AtlantaFalcons.TouchdownsScored){
  //   console.log("Both teams scored the same amount of defensive touchdowns")
  // }

  //sacks
  //  if(ArizonaCardinals.Sacks > AtlantaFalcons.Sacks){
  //   console.log(ArizonaCardinals.Team + " has scored more sacks than " + AtlantaFalcons.Team)
  // } else if(ArizonaCardinals.Sacks < AtlantaFalcons.Sacks) {
  //   console.log(AtlantaFalcons.Team + " have scored more sacks than " + ArizonaCardinals.Team)
  // } else if(ArizonaCardinals.Sacks == AtlantaFalcons.Sacks){
  //   console.log("Both teams scored the same amount of sacks")
  // }
  
  }

  








  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div>
			
		
		<div className="billsDefStats">		
          {/* <p>Points Allowed: {this.props.data.PointsAllowed}</p> */}
         
		</div>

    <div>
      {/* <FalconsDefStats/> */}
    </div>



          </div>
      )}
      </div>
    );    
  }
}