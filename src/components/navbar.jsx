import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

export default function navbar() {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
            <img src={logo} width='100%' alt="Beach Resort" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end">
            <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            >
            <Nav.Link as={Link} to="/">
                Home
            </Nav.Link>
            <Nav.Link as={Link} to="/rooms">
                Rooms
            </Nav.Link>
            </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
