import React from "react";
import Form from "react-bootstrap/Form";

function Login({toggleRegister}) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="San@2001" />
        </Form.Group>
        <p>Don't have an account? <a href="#" onClick={toggleRegister}>Register here</a></p>
      </Form>
    </>
  );
}

export default Login;
