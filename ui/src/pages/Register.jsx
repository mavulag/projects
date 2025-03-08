import React from 'react'
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Register = () => {
    // Initialize states for registration fields
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    // Handle submission of form data
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can add validation for matching passwords
      if (password === confirmPassword) {
        console.log({ email, password });
      } else {
        console.log("Passwords do not match!");
      }
    };

  return (
    <Container className="mt-5 mb-5">
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="mt-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Register
        </Button>
      </Form>
    </Container>
  )
}

export default Register
