import React from "react";
// import React, {Component} from 'react'
// import AuthenticatedRoute from "./AuthenticatedRoute";

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ArizonaCardinals from "./components/allTeams/ArizonaCardinals";
import AtlantaFalcons from "./components/allTeams/AtlantaFalcons";
import BuffaloBills from "./components/allTeams/BuffaloBills";
import NewEnglandPatriots from "./components/allTeams/NewEnglandPatriots";

import Login from "./components/allTeams/Login";
import Logout from "./components/allTeams/Logout"

import PlayerCompare from "./components/allPlayers/PlayerCompare";
import TodoApp from "./components/todo/TodoApp";
import WelcomeComponent from "./components/allTeams/WelcomeComponent"
import TeamClickIcons from "./components/allTeams/TeamClickIcons"
import HeaderComponent from "./components/allTeams/HeaderComponent"

import AuthenticationService from "./AuthenticationService.js";

// import logo from './logo.svg';
// import './App.css';
import './bootstrap.css'

export default class App extends React.Component {

  

  render(){
    return (


      <Router>



        <>
        <HeaderComponent/>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/playerCompare" component={PlayerCompare}/>
          <Route path="/welcome" component={WelcomeComponent}/>
          <Route  path="/teamClickIcons/:name" component={TeamClickIcons}/>
          <Route path="" component={ErrorComponent}/>
      </Switch>
      {/* <FooterComponent/> */}

      </>
       </Router>
     



    )    
  }
}

 


// class FooterComponent extends React.Component{
//   render(){
//     return(

    
//     <div>
//      <hr/> Footer 
//      </div>
//     )
//   }
// }



function ErrorComponent(){
  return <div>An Error Occurred. Please contact support</div>
}


