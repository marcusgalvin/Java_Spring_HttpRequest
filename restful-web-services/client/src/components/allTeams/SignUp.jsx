import React, {Component} from 'react'
import{BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AuthenticationService from '../../AuthenticationService.js'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Col, Row,  Form, FormGroup, Label, Input } from 'reactstrap';






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
    <h1>Create your Free Account</h1>
    <br/>
    <br/>
    <br/>
    <br/>


     <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="username" name="username" id="username" placeholder="" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="email">Email Address</Label>
        <Input type="text" name="email" id="email" placeholder=""/>
      </FormGroup>
      
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" id="city"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="state">State</Label>
            <Input type="text" name="state" id="state"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="zip">Zip</Label>
            <Input type="text" name="zip" id="zip"/>
          </FormGroup>  
        </Col>
      </Row>
      
      <Button>Sign in</Button>
    </Form>
    </div>
     
     
    )    
  }

  
}




export default SignUp