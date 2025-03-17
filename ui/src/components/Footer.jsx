import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-5">
      <Container>
        &copy; {new Date().getFullYear()} Store UI - All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;
