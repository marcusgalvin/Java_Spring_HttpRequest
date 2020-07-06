// import React from "react";
import React, {Component} from 'react'
import{BrowserRouter as Router, Route} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';


//welcome page
class WelcomeComponent extends Component{
  redner(){
    return <div>Welcome in28minutes</div>
  }
}







class Login extends Component{

constructor(props){
  super(props)
  this.state={
    username: "in28minutes",
    password: '',
    hasLoginFailed: false,
    showSuccessMessage: false
  }
  // this.handleUsernameChange = this.handleUsernameChange.bind(this)
  //   this.handlePasswordChange = this.handleUsernameChange.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.loginClicked = this.loginClicked.bind(this)

}

handleChange(event){
  // console.log(this.state)
  this.setState(
    {
      [event.target.name]: event.target.value
    }
  )

}




// handleUsernameChange(event){
//   console.log(event.target.value)
//   this.setState(
//     {
//       [event.target.name]: event.target.value
//     }
//   )

// }

// handlePasswordChange(event){
//   console.log(event.target.value)
//   this.setState(
//     {
//       password: event.target.value
//     }
//   )

// }

loginClicked(){
  //in28minutes, dummy
  if(this.state.username === 'in28minutes' &&this.state.password==='dummy'){
    console.log("succesful")
    this.setState({showSuccessMessage: true})
        this.setState({hasLoginFailed: false})

    
  }else {
    this.setState({showSuccessMessage: false})
    this.setState({hasLoginFailed: true})
  }
// console.log(this.state)
}


  render(){
    return (
    <div>
      {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
      {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
      {this.state.showSuccessMessage && <div>Login Successful</div>}

      {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}

      UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
      Password <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
      <button onClick={this.loginClicked}>Login</button>
      </div>
       
     
     
    )    
  }
  
}

// function ShowInvalidCredentials(props) {
//   if(props.hasLoginFailed){
//     return <div>Invalid Credentials</div>

//   } 
//   return null
// }

// function ShowLoginSuccessMessage(props){
//   if(props.showSuccessMessage){
//     return <div>Login Successful</div>
//   }
//   return null
// }


export default Login