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


//function to locate each teams defensive fantasy points
var totalPoints = 0;
var teamWeight;
var weight;

for(var i = 0; i < data.length; i++){
  var team = data[i].Team;
  totalPoints += data[i].FantasyPoints
  var sacks = data[i].Sacks;
  var defensiveTouchdowns = data[i].DefensiveTouchdowns;

  console.log(team + " scored " + data[i].FantasyPoints + " fantasy points");

  var allPoints = 5402.8
  // console.log(allPoints)

  var eachTeamFantasyPointPercentage = data[i].FantasyPoints / allPoints
  // var eachTeamSacks = data[i].Sacks

  console.log(data[i].Team + "'s percent is " + eachTeamFantasyPointPercentage);

  //test
  weight = data[i].BlockedKicks - data[i].BlockedKicks;
  console.log("Sacks: " + sacks)
  // console.log(Math.max(data[i].Sacks))

//weigh for fantasy points
if(eachTeamFantasyPointPercentage >= 0.075){
  console.log(team)
  console.log(team + "is in the top 75%")

} else if(eachTeamFantasyPointPercentage >= .050 && eachTeamFantasyPointPercentage <= 0.075){

  console.log(team + " has between .50 and .75%")

  weight =  0.5;

  console.log(team + " weight after calc FantasyPts " + weight)


} else if(eachTeamFantasyPointPercentage <= .050 && eachTeamFantasyPointPercentage>= .025){
  console.log(team + " has between .25 and .50%")

    weight = 0.25;
      console.log(team + " weight after calc FantasyPts " + weight)

    // weight = weight + 0.25;
      // console.log(team + " current weight " + weight)


} else if(eachTeamFantasyPointPercentage <= .025){
  console.log(team + " has less than .25%")

      weight = 0.1;
        console.log(team + " weight after calc FantasyPts " + weight)


}



//weight test #2 - sacks
if(sacks >= 75){
  console.log(team + " has " + sacks + " sacks");
  weight = weight + 0.75;
  console.log("weight after calc sacks " + weight);


} else if (sacks >=50 && sacks < 75){
  console.log(team + " has " + sacks +" sacks");
  weight = weight + .50;
  console.log("weight after calc sacks " + weight);


}else if (sacks >25 && sacks < 50){
  console.log(team + " has " + sacks +" sacks");
  weight = weight + .25;
  console.log("weight after calc sacks " + weight);


} else if (sacks < 25){
  console.log(team + " has " + sacks +" sacks");
  weight = weight + .1;
  console.log("weight after calc sacks " + weight);

}

//weight test #3 - touchdowns
if(defensiveTouchdowns > 10){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 1.0;
  console.log("weight after DEF TD calc " + weight)
  console.log("-----------------------")

} else if(defensiveTouchdowns < 10 && defensiveTouchdowns >=7){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0.5;
  console.log("weight after DEF TD calc " + weight)
  console.log("-----------------------")
} else if(defensiveTouchdowns < 7 && defensiveTouchdowns >=3){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0.25;
  console.log("weight after DEF TD calc " + weight)
  console.log("-----------------------")
} else if(defensiveTouchdowns < 3 && defensiveTouchdowns > 0){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0.1;
  console.log("weight after DEF TD calc " + weight)
  console.log("-----------------------")
} else if(defensiveTouchdowns == 0){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0;
  console.log("weight after DEF TD calc " + weight)
  console.log("-----------------------")
}


}




//print total league points to compare each team too
  console.log("total fantasy DEF league points " + totalPoints);















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