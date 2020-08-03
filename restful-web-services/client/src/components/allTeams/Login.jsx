// import React from "react";
import React, {Component} from 'react'
import{BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AuthenticationService from '../../AuthenticationService.js'
import SignUp from './SignUp';

// import App from "../components/allTeams/Login"
// import logo from './logo.svg';
// import './App.css';

import { Button } from 'reactstrap';










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
  // if(this.state.username === 'MarcusGalvin' &&this.state.password==='dummy'){

    // this.props.history.push("/welcome")

    // AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)


    //link to website after login
  //   this.props.history.push(`/welcome/${this.state.username}`)
  //   this.setState({showSuccessMessage: true})
  //       this.setState({hasLoginFailed: false})

    
  // }else {
  //   this.setState({showSuccessMessage: false})
  //   this.setState({hasLoginFailed: true})
  // }

  // AuthenticationService
  // .executeBasicAuthenticationService(this.state.username, this.state.password)
  // .then(
  //   ()=> {
  //         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
  //             this.props.history.push(`/welcome/${this.state.username}`)
  //   }).catch( ()=> {
  //     this.setState({showSuccessMessage: false})
  //   this.setState({hasLoginFailed: true})
  //   }

  // )
// console.log(this.state)


  AuthenticationService
  .executeJwtAuthenticationService(this.state.username, this.state.password)
  .then((response)=> {
          AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
              this.props.history.push(`/welcome/${this.state.username}`)
    }).catch( ()=> {
      this.setState({showSuccessMessage: false})
    this.setState({hasLoginFailed: true})
    }

  )



}


  render(){
    return (
    <div className="login">


      <div className="container">
      {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
      {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
      {this.state.showSuccessMessage && <div>Login Successful</div>}

      {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}

    <div className="username-input">

      <p>UserName</p> <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
    </div>
    <div className="password-input">
      <p>Password</p> <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
    </div>

    <div className="login-btn">
      <Button color="success" className="btn" onClick={this.loginClicked}>Login</Button>
            {/* <Button color="success">success</Button>{' '} */}

    </div>
    <br />
    <div className="test">
          <Link to="/SignUp"> <Button  color="success" className="btn">Sign Up</Button></Link>

    </div>
      </div>
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