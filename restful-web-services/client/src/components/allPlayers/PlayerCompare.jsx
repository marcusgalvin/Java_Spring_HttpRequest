import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { Table } from 'reactstrap';


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
var interceptionTouchdowns;

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
   interceptionTouchdowns = data[i].InterceptionReturnTouchdowns;


 

  //make weight = to blocked kicks and track it as a data point from the API
  //set weight to 0
  // weight = data[i].BlockedKicks
  
  weight = 0;



//interception touchdowns
var highestLeagueInterceptionTouchdowns = 7;
var interceptionTdPercentage = (interceptionTouchdowns / highestLeagueInterceptionTouchdowns) * 100;

if(interceptionTdPercentage > 75){
  console.log(team + " interception TDs " + interceptionTouchdowns);
  weight = weight + .75;
  console.log("weight after interception TD calc " + weight);
} else if (interceptionTdPercentage < 75 && interceptionTdPercentage >= 50){
  console.log(team + " interception TDs " + interceptionTouchdowns);
  weight = weight + .75;
  console.log("weight after interception TD calc " + weight);
} else if(interceptionTdPercentage < 50 && interceptionTdPercentage >= 25){
  console.log(team + " interception TDs " + interceptionTouchdowns);
  weight = weight + .50;
  console.log("weight after interception TD calc " + weight);
} else if(interceptionTdPercentage < 25 && interceptionTdPercentage >= 10){
  console.log(team + " interception TDs " + interceptionTouchdowns);
  weight = weight + .25;
  console.log("weight after interception TD calc " + weight);
} else if(interceptionTdPercentage == 0){
  console.log(team + " interception TDs " + interceptionTouchdowns);
  weight = weight + 0.0;
  console.log("weight after interception TD calc " + weight);
}



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
var test = 0;




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
        
      

      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Team Name</th>
          <th>State</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td><img src="https://s.yimg.com/ny/api/res/1.2/jmGajHlefPC2kDpcHUzwPA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NTA7aD01MDtpbD1wbGFuZQ--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/teams/83/70x70/sfo.png.cf.jpg" alt="Girl in a jacket" width="50" height="50"></img> SanFransisco 49ers</td>
          <td>California</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td><img src="https://www.bet-on-the-nfl.com/wp-content/uploads/2017/04/pittsburgh_steelers.gif" alt="" width="50" height="50"></img> Pittsburgh Steelers</td>
          <td>Pennsylvania</td>
          <td>@Twitter</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td><img src="https://www.bet-on-the-nfl.com/wp-content/uploads/2017/04/minnesota_vikings.gif" alt="" width="50" height="50"></img> Minnesota Vikings</td>
          <td>Minnesota</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td><img src="https://s.yimg.com/ny/api/res/1.2/OHal0dg6VVk8OVGjEN1KqQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NTA7aD01MDtpbD1wbGFuZQ--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/teams/83/70x70/nwe.png.cf.jpg" alt="" width="50" height="50"></img> New England Patriots</td>
          <td>Massachusetts</td>
          <td>@twitter</td>
        </tr>

        <tr>
          <th scope="row">5</th>
          <td><img src="https://www.bet-on-the-nfl.com/wp-content/uploads/2017/04/baltimore_ravens.gif" alt="" width="50" height="50"></img> Baltimore Ravens</td>
          <td>Maryland</td>
          <td>@twitter</td>
        </tr>

        <tr>
          <th scope="row">6</th>
          <td><img src="https://www.bet-on-the-nfl.com/wp-content/uploads/2017/04/tampa_bay_buccaneers.gif" alt="" width="50" height="50"></img> Tampa Bay Buccaneers</td>
          <td>Florida</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td><img src="https://s.yimg.com/ny/api/res/1.2/hea4Lcc9sq6AiEb.y6YWsQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NTA7aD01MDtpbD1wbGFuZQ--/http://l.yimg.com/j/assets/ipt/sea_70x70.png.cf.jpg" alt="" width="50" height="50"></img> Seatle SeaHawks</td>
          <td>Washington</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td><img src="https://s.yimg.com/ny/api/res/1.2/AaJ2GBtfPKfqBLxc8a.Sig--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NTA7aD01MDtpbD1wbGFuZQ--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/teams/83/70x70/nor.png.cf.jpg" alt="" width="50" height="50"></img> New Orleans Saints</td>
          <td>Louisiana</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td><img src="https://i.pinimg.com/originals/22/f2/6f/22f26ff5f2b74982e3b308c8654aa160.jpg" alt="" width="50" height="50"></img> Kansas City Cheifs</td>
          <td>Missouri</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td><img src="https://s.yimg.com/ny/api/res/1.2/KtfjDMyoCqfNL_.NwawB1g--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NTA7aD01MA--/http://media.zenfs.com/en_us/News/YahooSports/nyj.gif" alt="" width="50" height="50"></img> New York Jets</td>
          <td>New York</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">11</th>
          <td><img src="https://s.yimg.com/ny/api/res/1.2/ciOuxxUzG4wfY90.myUsVQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NTA7aD01MDtpbD1wbGFuZQ--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/teams/83/70x70/phi.png.cf.jpg" alt="" width="50" height="50"></img> Philadelphia Eagles</td>
          <td>Pennsylvania</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">12</th>
          <td><img src="https://s.yimg.com/ny/api/res/1.2/_35Mkxxvjvda9Ej.mohaoQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NTA7aD01MA--/http://media.zenfs.com/en_us/News/YahooSports/ten.gif" alt="" width="50" height="50"></img> Tennessee Titans</td>
          <td>Tennessee</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">13</th>
          <td><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png?w=50&h=50&transparent=true" alt="" width="50" height="50"></img> Las Vegas Raiders</td>
          <td>Nevada</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">14</th>
          <td><img src="https://walterfootball.com/images/fball/texansb_logo.gif" alt="" width="50" height="50"></img> Houstan Texans</td>
          <td>Texas</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">15</th>
          <td><img src="https://www.bet-on-the-nfl.com/wp-content/uploads/2017/04/arizona_cardinals.gif" alt="" width="50" height="50"></img> Arizona Cardinals</td>
          <td>Arizona</td>
          <td>@twitter</td>
        </tr>
        
      </tbody>
    </Table>




		</div>

    <div>
    </div>



          </div>
      )}
      </div>
    );    
  }
}