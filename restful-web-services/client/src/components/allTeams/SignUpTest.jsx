import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

//constants
const addressRegex = /^[a-zA-Z0-9][a-zA-Z0-9 .,-]*$/;
const currentDate = new Date();


const SignUpTest = () => (


<Formik
initialValues={{email:"", password:""}}
onSubmit={(values, { setSubmitting }) => {
	setTimeout(()=> {
		console.log("logging in", values)
	}, 500);
}}





//define yup validation
validationSchema = {Yup.object().shape({

	username: Yup.string()
	.required("Must Provide a Username")
	.min(5, "Username must be at least 5 characters"),

	email: Yup.string()
	.email()
	.required("email address is required"),

	password:Yup.string()
	.required("password input required")
	.min(5, "password is too short, must be 5 characters long"),
	// .matches(/(?=.*[0-9]))/,"password should contain a number"

	city: Yup.string()
	.max(30, "must be no more than 30 characters long")
	.matches(
		addressRegex, "May only contain hyphens, periods, commas, for alphanumeric characters"
	)

})}


>

{ props => {
	const {
		values,
		touched,
		errors,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit
	} = props;

	return (
		    

		<form autoComplete="off" onSubmit={handleSubmit}>

		<div className="createAcc"><h1>Create your Free Account</h1></div>
		<br/>

		<Form>
	<Row form>
        <Col md={6}>
          <FormGroup>
			  {/* email */}
            <Label for="username">Username</Label>
            <Input type="text" value={values.username} name="username"  onChange={handleChange} onBlur={handleBlur} className={errors.username && touched.username && "error"} />
				
			{errors.username && touched.username && (
			<div className="input-feedback">{errors.username}</div>
		)}
		  </FormGroup>
        </Col>
		<Col md={6}>
          <FormGroup>
			  {/* email */}
            <Label for="password">Password</Label>
            <Input type="text" value={values.password} name="password"  onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password && "error"} />

			{errors.password && touched.password && (
			<div className="input-feedback">{errors.password}</div>
		)}	
		  </FormGroup>
        </Col>
		
	</Row>

	 <FormGroup>
        <Label for="exampleAddress">Email Adress</Label>
		<Input type="text" value={values.email} name="email"  onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email && "error"} />

		{errors.email && touched.email && (
			<div className="input-feedback">{errors.email}</div>
		)}		
      </FormGroup>

	<Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="city">City</Label>
			<Input type="text" value={values.city} name="city"  onChange={handleChange} onBlur={handleBlur} className={errors.city && touched.city && "error"} />

			{errors.city && touched.city && (
			<div className="input-feedback">{errors.city}</div>
		)}		

          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>


		</Form>


		

		

		

		

		<Button className="createAcc" type="submit" disabled={isSubmitting}>Sign up</Button>
		</form>








	);
	
}}



</Formik>


)

export default SignUpTest;