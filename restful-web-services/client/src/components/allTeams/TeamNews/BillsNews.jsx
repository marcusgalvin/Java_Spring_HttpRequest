import React from "react";
import axios from 'axios';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class BillsNews extends React.Component {

  state = {
    loading: true,
    team : null
    
  }

async componentDidMount(){
  const url = "http://localhost:8080/billsNews";
  axios.get(url).then(res => {
    const data = res.data;
    // console.log(data)
      this.setState({ team: data[0], loading: false});
  })
}



  render(){
    return (
    <div>
      {this.state.loading || !this.state.team ? (
        <div>loading...</div>
      ) : (
        <div>
			

		<div className="billsNews">		
         



      <Card className="info">
        <CardImg top width="100%" src="https://www.steelcityunderground.com/wp-content/uploads/2017/03/nfl-league-news.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.state.team.Title}</CardTitle>
          <CardSubtitle>Date: {this.state.team.TimeAgo}</CardSubtitle>
          <CardSubtitle>Source: {this.state.team.Source}</CardSubtitle>
          <br/>
          <CardText>{this.state.team.Content}</CardText>
        </CardBody>
      </Card>


		  

          
		</div>

		

		


          </div>
      )}
      </div>
    );    
  }
}