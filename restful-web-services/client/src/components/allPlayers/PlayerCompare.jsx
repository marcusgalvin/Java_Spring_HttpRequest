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
var totalLeagueTacklesForLoss = 0;

for(var i = 0; i < data.length; i++){
  var team = data[i].Team;
  totalPoints += data[i].FantasyPoints
  totalLeagueTacklesForLoss += data[i].TacklesForLoss;

  var sacks = data[i].Sacks;
  var defensiveTouchdowns = data[i].DefensiveTouchdowns;
  var tacklesForLoss = data[i].TacklesForLoss;

  console.log(team + " scored " + data[i].FantasyPoints + " fantasy points");

  var allPoints = 5402.8
  // console.log(totalPoints)

  var eachTeamFantasyPointPercentage = data[i].FantasyPoints / allPoints
  // var eachTeamSacks = data[i].Sacks

  // console.log(data[i].Team + "'s percent is " + eachTeamFantasyPointPercentage);

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


//weight test #3 - tackles for loss
//average league tackles for loss = 132.73
if(tacklesForLoss > 150){
  console.log(team + " has " + tacklesForLoss + " tackles for loss")
  weight = weight + 1;
  console.log("weight after tackles for loss calc " + weight)

} else if(tacklesForLoss < 150 && tacklesForLoss >=100) {
  console.log(team + " has " + tacklesForLoss + " tackles for loss")
  weight = weight + 0.75;
  console.log("weight after tackles for loss calc " + weight)

} else if (tacklesForLoss < 100 && tacklesForLoss >= 75){
  console.log(team + " has " + tacklesForLoss + " tackles for loss")
  weight = weight + 0.50;
  console.log("weight after tackles for loss calc " + weight)

} else if (tacklesForLoss < 75 && tacklesForLoss >= 50){
  console.log(team + " has " + tacklesForLoss + " tackles for loss")
  weight = weight + 0.25;
  console.log("weight after tackles for loss calc " + weight)

} else if( tacklesForLoss < 50){
  console.log(team + " has " + tacklesForLoss + " tackles for loss")
  weight = weight + 0.1;
  console.log("weight after tackles for loss calc " + weight)

}







//weight test #3 - touchdowns
if(defensiveTouchdowns > 10){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 1.0;
  console.log("weight after DEF TD calc " + weight)


} else if(defensiveTouchdowns < 10 && defensiveTouchdowns >=7){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0.75;
  console.log("weight after DEF TD calc " + weight)

} else if(defensiveTouchdowns < 7 && defensiveTouchdowns >=3){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0.5;
  console.log("weight after DEF TD calc " + weight)

} else if(defensiveTouchdowns < 3 && defensiveTouchdowns > 0){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0.25;
  console.log("weight after DEF TD calc " + weight)

} else if(defensiveTouchdowns == 0){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0;
  console.log("weight after DEF TD calc " + weight)
}

console.log(weight);
  console.log("-----------------------")

}









//print total league points to compare each team too
  console.log("total league fantasy DEF league points " + totalPoints);
  console.log("total league tackles for loss " + totalLeagueTacklesForLoss);
  console.log("total league tackles for loss " + totalLeagueTacklesForLoss / 32);


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