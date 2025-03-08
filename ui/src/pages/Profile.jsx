// ./ui/src/pages/Profile.jsx
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Profile = () => {
  // Initialize states for profile fields
  const [name, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  // Handle profile update
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save profile updates (e.g., call an API to update user info)
    console.log("Profile updated:", { name, email });
  };

  return (
    <Container className="mt-5 mb-5">
      <h2>Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Update Profile
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;
