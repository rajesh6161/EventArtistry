import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { connect } from "react-redux";

import {Form, Button, Card} from 'react-bootstrap'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
    console.log(formData);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
  
      <div className="container" id="loginpage">
        <Card></Card>
    <h1 className="text-center" id="auth-header-login" style={{marginTop: "15px"}}>Welcome Back</h1>
    <div id="loginPage">
    <Form onSubmit={onSubmit}>


<Form.Group controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control onChange={(e) => onChange(e)} value={email} name="email" type="email" placeholder="Enter your email" />
  </Form.Group>

  <Form.Group controlId="formGridPassword1">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={(e) => onChange(e)} value={password} name="password" type="password" placeholder="Password" />
  </Form.Group>

  

  <button type="submit" className="submit_button">
    <span className="btn_label">Login</span>
  </button>
</Form>
    </div>
  </div>
     
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
