import React, {Component} from 'react'
import{BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AuthenticationService from '../../AuthenticationService.js'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
//  import { Formik, Form, Field, ErrorMessage } from 'formik'
import SignUpTest from './SignUpTest';

import {Formik} from 'formik';
import * as Yup from 'yup';






class SignUp extends Component{



  

constructor(props){
  super(props)
  this.state={
    username: "",
    password: '',
    email: "",
    city: "",
    state: "",
    zip: "",
    hasSignUpFailed: false,
    showSuccessMessage: false
  }
  console.log(this.state);
}

 handleChange(event) {
    this.setState(
      {
        [event.target.name] : event.target.value
      }
    )
  }


signUpButtonClicked() {

        var user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        console.log("signed up")
        console.log(user)

        // try {
        //     UserDataService.registerUser(user)
        //         .then(() => this.props.history.push('/login'))
        // } catch (error) {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasRegistrationFailed:true})
        // }
    }  




  render(){
    return (
     
   
  <div className ="signUp">

    
       <SignUpTest/>
     



   </div>
   
    

     
    ) 
     
      
  }

  
}




export default SignUp