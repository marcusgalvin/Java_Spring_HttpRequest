import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ArizonaCardinals from "./ArizonaCardinals"
import AtlantaFalcons from "./AtlantaFalcons";
import BuffaloBills from "./BuffaloBills";
import NewEnglandPatriots from "./NewEnglandPatriots";
import SanFransisco49ers from "./SanFransisco49ers";
import MiamiDolphins from "./MiamiDolphins";
import DetroitLions from "./DetroitLions";
import NewYorkJets from "./NewYorkJets";
import BaltimoreRavens from "./BaltimoreRavens";
import DallasCowboys from "./DallasCowboys";
import PhiladelphiaEagles from "./PhiladelphiaEagles";
import SeatleSeaHawks from "./SeatleSeaHawks";
import KansasCityChiefs from "./KansasCityChiefs"


export default class App extends React.Component {

  render(){
    return (

      // <> 
      // <h1>Select A Team</h1>
      // <>
      <Router>
        <div className="division">
            <img src ="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/afc.png&h=100&w=100"></img>
            <h1 className="division">AFC</h1>
            <img src ="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/afc.png&h=100&w=100"></img>

            
          </div>	
        <div className="teamIcons">
          
         
{/* falcons       */}
        <div className="AtlantaFalcons">
          <Link to="/AtlantaFalcons">
            <button className="falconsButton">
            </button>
            </Link>
        </div>



        <br />
        <div className="break"></div>
{/* cadinals     */}
        <div className="ArizonaCardinals">
          <Link to="/ArizonaCardinals">
            <button className="cardinalsButton">
            </button>            
            </Link>
        </div>
         <br />
        <div className="break"></div>
{/* bills */}
        <div className="BuffaloBills">
          <Link to="/BuffaloBills">
            <button className="billsButton">
            </button>            
            </Link>
        </div>
        <div className="break"></div>
{/* patriots */}
        <div className="teamIconRowTwo">

          <Link to="/NewEnglandPatriots">
            <button className="patsButton">
            </button>
          </Link>
        </div>
    	<div className="break"></div>
{/* 49ers */}
		 <div className="teamIconRowTwo">

          <Link to="/SanFransisco49ers">
            <button className="sanFranButton">
            </button>
          </Link>
        </div>
    	<div className="break"></div>
{/* dolphins */}
      <div className="teamIconRowTwo">

          <Link to="/MiamiDolphins">
            <button className="dolphinsButton">
            </button>
          </Link>
        </div>
    	<div className="break"></div>

</div>
<div className="division">
  <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nfc.png&h=100&w=100"></img>
  <h1 className="division">NFC</h1>
    <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nfc.png&h=100&w=100"></img>

</div>
<div className="teamIcons">

{/* lions */}
      <div className="teamIconRowTwo">

          <Link to="/DetroitLions">
            <button className="lionsButton">
            </button>
          </Link>
        </div>
    	<div className="break"></div>
{/* jets */}
      <div className="teamIconRowTwo">

          <Link to="/NewYorkJets">
            <button className="jetsButton">
            </button>
          </Link>
        </div>
    	<div className="break"></div>
{/* ravens */}
      <div className="teamIconRowTwo">

          <Link to="/BaltimoreRavens">
            <button className="ravensButton">
            </button>
          </Link>
        </div>
    	<div className="break"></div>
{/* cowboys */}
      <div className="teamIconRowTwo">

          <Link to="/DallasCowboys">
            <button className="cowboysButton">
            </button>
          </Link>
        </div>
    	<div className="break"></div>
{/* eagles */}
      <div className="teamIconRowTwo">

          <Link to="/PhiladelphiaEagles">
            <button className="eaglesButton">
            </button>
          </Link>
        </div>
    	<div className="break"></div>
{/* seahawks */}
      <div className="teamIconRowTwo">

          <Link to="/SeatleSeaHawks">
            <button className="seahawksButton">
            </button>
          </Link>
        </div>
    	<div className="break"></div>
{/* chiefs */}
      <div className="teamIconRowTwo">

          <Link to="/KansasCityChiefs">
            <button className="chiefsButton">
            </button>
          </Link>
        </div>
    	<div className="break"></div>



 {/* <div className="PlayerCompare">
          <Link to="/PlayerCompare">
            <button className="PlayerCompareButton">
            TeamCompare
            </button>
            </Link>
        </div> */}


		 <div className="break"></div>


 {/* <div className="todoApp">
          <Link to="/TodoApp">
            <button className="todoAppButton">
            TodoApp
            </button>
            </Link>
        </div> */}
          

          <Switch>

		  {/* <Route path="/Login">
			  <Login/>
		  </Route> */}

          <Route exact path="/ArizonaCardinals">
          <ArizonaCardinals/>
          </Route>

          <Route path="/AtlantaFalcons">
          <AtlantaFalcons/> 
          </Route>

          <Route path="/BuffaloBills">
          <BuffaloBills/> 
          </Route>

          <Route path="/NewEnglandPatriots">
            <NewEnglandPatriots/>
          </Route>

		      <Route path="/SanFransisco49ers">
            <SanFransisco49ers/>
          </Route>

          <Route path="/MiamiDolphins">
            <MiamiDolphins/>
          </Route>

          <Route path="/DetroitLions">
            <DetroitLions/>
          </Route>

          <Route path="/NewYorkJets">
            <NewYorkJets/>
          </Route>

          <Route path="/BaltimoreRavens">
            <BaltimoreRavens/>
          </Route>

          <Route path="/DallasCowboys">
            <DallasCowboys/>
          </Route>

           <Route path="/PhiladelphiaEagles">
            <PhiladelphiaEagles/>
          </Route>

          <Route path="/SeatleSeaHawks">
            <SeatleSeaHawks/>
          </Route>

          <Route path="/KansasCityChiefs">
            <KansasCityChiefs/>
          </Route>

          {/* <Route path="/PlayerCompare">
          <PlayerCompare/>
          </Route> */}

		  {/* <Route path="/TodoApp">
          <TodoApp/>
          </Route> */}

          


          </Switch>

          </div>     
      
      </Router>
    );    
  }
}