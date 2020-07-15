import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import App from "../c"
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
  import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


export default class Logout extends React.Component {

  


  render(){
    return (
		<div className="routeCards-container">
			<br/>

	<div className="routeCard">		
	  <Card>
        <CardHeader backgroundColor="blue" tag="h3">Stats</CardHeader>
        <CardBody>
          <CardTitle>NFL 2019 Team Stats</CardTitle>
          <CardText>Check out NFL teams Offensive & Defensive Stats, team news & more</CardText>
          <Button color="primary"><Link to="/teamClickIcons/MarcusGalvin">Click Here</Link></Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
	</div>

	<div className="routeCard">
	  <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="primary">Go somewhere</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
	</div>

    <div className="routeCard">
	  <Card>
        <CardHeader tag="h3">Ranks</CardHeader>
        <CardBody>
          <CardTitle>Top NFL Ranks 2019</CardTitle>
          <CardText>Check out how an algorithm I coded generated the top 15 defenses in the NFL</CardText>
          <Button color="primary"><Link to="/PlayerCompare">Click Here</Link></Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
	</div>


</div>

    
	  
    )    
  }
}
