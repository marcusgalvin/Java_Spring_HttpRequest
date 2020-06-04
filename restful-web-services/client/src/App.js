import React from "react";
import ArizonaCardinals from "./components/allTeams/ArizonaCardinals";
import AtlantaFalcons from "./components/allTeams/AtlantaFalcons";

// import logo from './logo.svg';
// import './App.css';

export default class App extends React.Component {

  

  render(){
    return (
    <div>
        <div>
          <p>Teams:</p>
          <ArizonaCardinals/>
          <br />
          <AtlantaFalcons/>


          </div>
      )}
      </div>
    );    
  }
}

