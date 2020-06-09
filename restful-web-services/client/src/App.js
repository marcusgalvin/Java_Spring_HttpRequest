import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ArizonaCardinals from "./components/allTeams/ArizonaCardinals";
import AtlantaFalcons from "./components/allTeams/AtlantaFalcons";
import BuffaloBills from "./components/allTeams/BuffaloBills";

import PlayerCompare from "./components/allPlayers/PlayerCompare";

// import logo from './logo.svg';
// import './App.css';

export default class App extends React.Component {

  

  render(){
    return (
      <Router>
    
        <div>
         
          
        <div className="AtlantaFalcons">
          <Link to="/AtlantaFalcons">
            <button className="falconsButton">
            {/* Arizona Cardinals */}
            </button>
            </Link>
        </div>

        <br />
        <div className="ArizonaCardinals">
          <Link to="/ArizonaCardinals">
            <button className="cardinalsButton">
              {/* ArizonaCardinals */}
            </button>            
            </Link>
        </div>

         <br />
        <div className="BuffaloBills">
          <Link to="/BuffaloBills">
            <button className="billsButton">
              {/* ArizonaCardinals */}
            </button>            
            </Link>
        </div>


        <div className="PlayerCompare">
          <Link to="/PlayerCompare">
            <button className="PlayerCompareButton">
            PlayerCompare
            </button>
            </Link>
        </div>

          

          <Switch>

          <Route exact path="/ArizonaCardinals">
          <ArizonaCardinals/>
          </Route>

          <Route path="/AtlantaFalcons">
          <AtlantaFalcons/> 
          </Route>

          <Route path="/BuffaloBills">
          <BuffaloBills/> 
          </Route>

          <Route path="/PlayerCompare">
          <PlayerCompare/>
          </Route>


          </Switch>

          </div>     
      
      </Router>
    );    
  }
}


