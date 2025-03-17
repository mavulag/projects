import React from "react";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zip: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Details:", formData);
    navigate("/payment");
  };

  return (
    <Container className="mt-5 mb-5">
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required/>
        </Form.Group>
        <Form.Group controlId="lastName" className="mt-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
        </Form.Group>
        <Form.Group controlId="email" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" value={formData.email} onChange={handleChange} required/>
        </Form.Group>
        <Form.Group controlId="address" className="mt-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required/>
        </Form.Group>
        <Form.Group controlId="city" className="mt-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required/>
        </Form.Group>
        <Form.Group controlId="country" className="mt-3">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} required/>
        </Form.Group>
        <Form.Group controlId="zip" className="mt-3">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="text" name="zip" value={formData.zip} onChange={handleChange} required/>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4">Proceed to Payment</Button>
      </Form>
    </Container>
  );
};

export default Checkout;
