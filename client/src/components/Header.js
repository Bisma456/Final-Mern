import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="">
      <Navbar.Brand as={Link} to="/">
        MERN App
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/users">
          Users
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
        <Nav.Link as={Link} to="/posts">
         Posts
        </Nav.Link>
        <Nav.Link as={Link} to="/addpost">
         New Post
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
         login
        </Nav.Link>  
         <Nav.Link as={Link} to="/login">
         logout
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;