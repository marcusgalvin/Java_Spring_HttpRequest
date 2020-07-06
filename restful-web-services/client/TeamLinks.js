import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ArizonaCardinals from "./components/allTeams/ArizonaCardinals";
import AtlantaFalcons from "./components/allTeams/AtlantaFalcons";
import BuffaloBills from "./components/allTeams/BuffaloBills";
import NewEnglandPatriots from "./components/allTeams/NewEnglandPatriots";

import Login from "./components/allTeams/Login";

import PlayerCompare from "./components/allPlayers/PlayerCompare";
import TodoApp from "./components/todo/TodoApp";

// import logo from './logo.svg';
// import './App.css';

export default class App extends React.Component {

  

  render(){
    return (
      <Router>
    

	
        <div className="teamIcons">


			<div className="Login">
          <Link to="/Login">
            <button className="loginButton">
            </button>
            </Link>
        </div>

         
          
        <div className="AtlantaFalcons">
          <Link to="/AtlantaFalcons">
            <button className="falconsButton">
            {/* Arizona Cardinals */}
            </button>
            </Link>
        </div>

        <br />
        <div className="break"></div>
        
        <div className="ArizonaCardinals">
          <Link to="/ArizonaCardinals">
            <button className="cardinalsButton">
            </button>            
            </Link>
        </div>

         <br />
        <div className="break"></div>

        <div className="BuffaloBills">
          <Link to="/BuffaloBills">
            <button className="billsButton">
            </button>            
            </Link>
        </div>

        <div className="break"></div>

       

        <div className="teamIconRowTwo">

          <Link to="/NewEnglandPatriots">
            <button className="patsButton">
            </button>
          </Link>
        </div>

                <div className="break"></div>


 <div className="PlayerCompare">
          <Link to="/PlayerCompare">
            <button className="PlayerCompareButton">
            TeamCompare
            </button>
            </Link>
        </div>


		 <div className="break"></div>


 {/* <div className="todoApp">
          <Link to="/TodoApp">
            <button className="todoAppButton">
            TodoApp
            </button>
            </Link>
        </div> */}
          

          <Switch>

		  <Route path="/Login">
			  <Login/>
		  </Route>

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

          <Route path="/PlayerCompare">
          <PlayerCompare/>
          </Route>

		  {/* <Route path="/TodoApp">
          <TodoApp/>
          </Route> */}

          


          </Switch>

          </div>     
      
      </Router>
    );    
  }
}
