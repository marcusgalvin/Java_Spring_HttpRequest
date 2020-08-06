import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import App from "../c"
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


export default class LandingPageBanner extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://i.imgur.com/JkP42ZA.jpg",
		"https://i2.wp.com/theathleteshub.org/wp-content/uploads/2018/08/1500x500.jpeg?fit=1500%2C500&ssl=1",
		"https://www.centrodeinformes.com.ar/wp-content/uploads/2020/02/ANZMZB47XNCNXCB5Q4AVTBRFUM-1500x500.jpg",
		"https://www.americanoticias.org/wp-content/uploads/2020/02/32030/super-bowl-homenaje-fiesta-y-una-final-electrizante-que-consagro-campeon-a-kansas-city-chiefs-1500x500.jpg",
		"https://preview.redd.it/jomdrlm2dq601.jpg?auto=webp&s=177f4044802701ca7381d3bfb1a9bcac37befff2"
      ],
      selectedImage: "https://i2.wp.com/theathleteshub.org/wp-content/uploads/2018/08/1500x500.jpeg?fit=1500%2C500&ssl=1"
    };
  }

  componentDidMount() {
    let intervalId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.selectedImage === this.state.images[0]) {
          return {
            selectedImage: this.state.images[1]
          }
        } else if(prevState.selectedImage === this.state.images[1]) {
          return {
			selectedImage: this.state.images[2]
		  }
          } else if(prevState.selectedImage === this.state.images[2]) {
          return {
			selectedImage: this.state.images[3]
		  }
		  } else if(prevState.selectedImage === this.state.images[3]) {
          return {
            selectedImage: this.state.images[4]
		  }
		  } else if(prevState.selectedImage === this.state.images[4]) {
          return {
            selectedImage: this.state.images[0]
		  }
		   
        }
      });
    }, 5000);

    this.setState({
      intervalId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

	
  


  render(){
    return (
		<div className="landing">
		<div className="roatingPics">
			<img src={this.state.selectedImage} alt={"images"} />
		</div>


		<div className="pictureOverlay">
			{/* <p>Discover NFL</p>
			<h5>Stats, Ranks, News & More</h5>
			 */}
			
		</div>
		
</div>
    
	  
    )    
  }
}
