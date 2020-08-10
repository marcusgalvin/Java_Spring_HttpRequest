import React, {Component} from 'react'
import{BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AuthenticationService from '../../AuthenticationService.js'
import SignUp from './SignUp';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';





class Login extends Component{

constructor(props){
  super(props)
  this.state={
    username: "in28minutes",
    password: '',
    hasLoginFailed: false,
    showSuccessMessage: false
  }
  
  this.handleChange = this.handleChange.bind(this)
  this.loginClicked = this.loginClicked.bind(this)

}

handleChange(event){
  this.setState(
    {
      [event.target.name]: event.target.value
    }
  )
}


loginClicked(){
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
      <Button color="primary">
        <Link className="buttonTest" to="/SignUp">Sign Up</Link>
        </Button>




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