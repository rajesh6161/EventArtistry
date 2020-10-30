import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

import {Form, Col, Button} from 'react-bootstrap'

const Register = ({ register, setAlert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstname, lastname, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ firstname, lastname, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div id="registerpage" className="container">
      <h1 className="text-center" style={{marginTop: "15px"}} id="auth-header-register">Create A New Account</h1>
      <div id="registerPage">
      <Form onSubmit={onSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridfname">
      <Form.Label>First Name</Form.Label>
      <Form.Control onChange={(e) => onChange(e)} value={firstname} name="firstname" type="text" placeholder="Enter first name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridlname">
      <Form.Label>Last Name</Form.Label>
      <Form.Control onChange={(e) => onChange(e)} value={lastname} name="lastname" type="text" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control onChange={(e) => onChange(e)} value={email} name="email" type="email" placeholder="Enter your email" />
    </Form.Group>

    <Form.Group controlId="formGridPassword1">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={(e) => onChange(e)} value={password} name="password" type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group controlId="formGridPassword2">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control onChange={(e) => onChange(e)} value={password2} name="password2" type="password" placeholder="Re-enter Password" />
    </Form.Group>

  <button type="submit" className="submit_button">
    <span className="btn_label">Register</span>
  </button>
</Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, setAlert })(Register);
