import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const NavigationBar = () => {
  const {cart, wishlist} = useCart()

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Store UI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart <Badge bg="light" text="dark" >{cart.length}</Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/wishlist">
              Wishlist <Badge bg="light" text="dark" >{wishlist.length}</Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
