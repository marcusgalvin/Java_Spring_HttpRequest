import React from "react";
// import logo from './logo.svg';
// import './App.css';

export default class playerCompare extends React.Component {

  state = {
    loading: true,
    team : null,
    weight: ""
    
    
  }


async componentDidMount(){
  const url = "http://localhost:8080/allTeamsDefStats";
  const response = await fetch(url);
   var data = await response.json();
  console.log(data);

  this.setState({ team: data, loading: false});


//function to locate each teams defensive fantasy points
var totalPoints = 0;
var totalWeight;
var weight;
var totalLeagueTacklesForLoss = 0;

var sacks;
var defensiveTouchdowns;
var tacklesForLoss;
var interceptions;
var forcedFumbles;
var fumbleReturnYards

var max = 0;
var test;


for(var i = 0; i < data.length; i++){
  var team = data[i].Team;
  totalPoints += data[i].FantasyPoints

  // totalLeagueTacklesForLoss += data[i].TacklesForLoss;

   sacks = data[i].Sacks;
   defensiveTouchdowns = data[i].DefensiveTouchdowns;
   tacklesForLoss = data[i].TacklesForLoss;
   interceptions = data[i].Interceptions;
   forcedFumbles = data[i].FumblesForced;
   fumbleReturnYards = data[i].FumbleReturnYards;


 

  //make weight = to blocked kicks and track it as a data point from the API
  //set weight to 0
  // weight = data[i].BlockedKicks
  
  weight = 0;

//fumble return yards
var highestLeagueFumbleReturnYards = 256;
var fumbleReturnYardsPercentage = (fumbleReturnYards/ highestLeagueFumbleReturnYards) * 100;

if(fumbleReturnYards < 0){
  console.log(team + " fumble return yards " + fumbleReturnYards)
  weight = weight - 0.25;
  console.log("weight after fumble return yard calc " + weight)
}
else if(fumbleReturnYardsPercentage > 75){
  console.log(team + " fumble return yards " + fumbleReturnYards)
  weight = weight + 0.75;
  console.log("weight after fumble return yard calc " + weight)
} else if(fumbleReturnYardsPercentage < 75 && fumbleReturnYardsPercentage >= 50){
  console.log(team + " fumble return yards " + fumbleReturnYards)
  weight = weight + 0.50;
  console.log("weight after fumble return yard calc " + weight)
}else if (fumbleReturnYardsPercentage < 50 && fumbleReturnYardsPercentage >= 25){
  console.log(team + " fumble return yards " + fumbleReturnYards)
  weight = weight + 0.25;
  console.log("weight after fumble return yard calc " + weight)
} else if (fumbleReturnYardsPercentage < 25){
  console.log(team + " fumble return yards " + fumbleReturnYards)
  weight = weight + 0.1;
  console.log("weight after fumble return yard calc " + weight)
}else if (fumbleReturnYardsPercentage == 0){
  console.log(team + " fumble return yards " + fumbleReturnYards)
  weight = weight + 0.0;
  console.log("weight after fumble return yard calc " + weight)
}else if (fumbleReturnYardsPercentage < 0){
  console.log(team + " fumble return yards " + fumbleReturnYards)
  weight = weight - 0.25;
  console.log("weight after fumble return yard calc " + weight)
}



//forced fumbles percentage calc
var highestLeagueForcedFumbles = 35;
var forcedFumblesPercentage = (forcedFumbles / highestLeagueForcedFumbles) * 100;

if(forcedFumblesPercentage > 75){
  console.log(team + " forced fumbles " + forcedFumbles)
  weight = weight + 0.75;
  console.log("weight after forced fumble calc " + weight);
}else if (forcedFumblesPercentage < 75 && forcedFumbles >= 50){
  console.log(team + " forced fumbles " + forcedFumbles)
  weight = weight + 0.50;
  console.log("weight after forced fumble calc " + weight);
}else if(forcedFumblesPercentage < 50 && forcedFumbles >= 25){
  console.log(team + " forced fumbles " + forcedFumbles)
  weight = weight + 0.25;
  console.log("weight after forced fumble calc " + weight);
} else if(forcedFumblesPercentage < 25){
  console.log(team + " forced fumbles " + forcedFumbles)
  weight = weight + 0.1;
  console.log("weight after forced fumble calc " + weight);
}



//interceptions percentage calc
var highestLeagueInterception = 38;
var interceptionPercentage = (interceptions / highestLeagueInterception) * 100;

if(interceptionPercentage > 75){
    console.log(team + " has " + interceptions + "interceptions");
    weight = weight + 0.75;
    console.log("weight after interpcetion calc " + weight);
} else if(interceptionPercentage < 75 && interceptionPercentage >= 50){
    console.log(team + " has " + interceptions + "interceptions");
    weight = weight + 0.50;
    console.log("weight after interpcetion calc " + weight);
} else if(interceptionPercentage < 50 && interceptionPercentage >= 25){
    console.log(team + " has " + interceptions + "interceptions");
    weight = weight + 0.25;
    console.log("weight after interpcetion calc " + weight);
} else if(interceptionPercentage < 25){
    console.log(team + " has " + interceptions + "interceptions");
    weight = weight + 0.1;
    console.log("weight after interpcetion calc " + weight);
}






//sack percentage calc

var highestLeagueSackNumber = 81;
var sackPercentage = (sacks / highestLeagueSackNumber) * 100;

if(sackPercentage  >= 75){
    console.log(team + " has " + sacks + " sacks");
    weight = weight + 0.75;
    console.log("weight after calc sacks " + weight);
} else if (sackPercentage < 75 && sackPercentage >= 50){
    console.log(team + " has " + sacks + " sacks");
    weight = weight + 0.50;
    console.log("weight after calc sacks " + weight);
} else if(sackPercentage < 50 && sackPercentage >= 25){
    console.log(team + " has " + sacks + " sacks");
    weight = weight + 0.25;
    console.log("weight after calc sacks " + weight);
} else if(sackPercentage < 25){
    console.log(team + " has " + sacks + " sacks");
    weight = weight + 0.1;
    console.log("weight after calc sacks " + weight);
}


//tackles for loss percentage calc
var highestleagueTacklesForLoss = 175;
var tacklesForLossPercentage = (tacklesForLoss / highestleagueTacklesForLoss) * 100;

if(tacklesForLossPercentage > 75){
  console.log(team + " has " + tacklesForLoss + " tackles for loss")
  weight = weight + 0.75;
  console.log("weight after tackles for loss calc " + weight)
} else if (tacklesForLossPercentage < 75 && tacklesForLossPercentage >= 50){
  console.log(team + " has " + tacklesForLoss + " tackles for loss")
  weight = weight + 0.50;
  console.log("weight after tackles for loss calc " + weight)
} else if (tacklesForLossPercentage < 50 && tacklesForLossPercentage >= 25){
  console.log(team + " has " + tacklesForLoss + " tackles for loss")
  weight = weight + 0.25;
  console.log("weight after tackles for loss calc " + weight)
} else if (tacklesForLossPercentage < 25){
  console.log(team + " has " + tacklesForLoss + " tackles for loss")
  weight = weight + 0.1;
  console.log("weight after tackles for loss calc " + weight)
}


//defenvie touchdown percentage calc
var highestLeagueDefensiveTds = 14;
var defensiveTdPercentage = (defensiveTouchdowns / highestLeagueDefensiveTds) * 100;

if(defensiveTdPercentage > 75){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0.75;
  console.log("weight after DEF TD calc " + weight)
} else if (defensiveTdPercentage < 75 && defensiveTdPercentage >= 50){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0.50;
  console.log("weight after DEF TD calc " + weight)
} else if (defensiveTdPercentage < 50 && defensiveTdPercentage >= 25){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0.25;
  console.log("weight after DEF TD calc " + weight)
} else if (defensiveTdPercentage < 25){
  console.log(team + " has " + defensiveTouchdowns + " defensive TDs");
  weight = weight + 0.1;
  console.log("weight after DEF TD calc " + weight)
}



console.log("current weight: " + weight);
  console.log("-----------------------")

//find the maximum weight amount in numbers
var value = Number(weight);
if(value > max){
  max = value;
}

console.log(team[i] + " is in the lead with " + max + " points")


}






//print total league points to compare each team too
  console.log("total league fantasy DEF league points " + totalPoints);
  

}



  








  render(){
    

    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div>
			
		
		<div className="billsDefStats">		
        <p>Team Defensive Ranking:</p> 
        <p>{this.state.weight}</p>
        



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