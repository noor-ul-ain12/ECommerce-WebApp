import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

function Bar() {
  const logoStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  };

  const cartIconStyle = {
    width: '40px',
    height: '40px',
  };

  return (
    <Navbar bg="light" variant="light" >
      <Navbar.Brand as={Link} to="/">
       GRACE 
      </Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact Us
        </Nav.Link>
        <Nav.Link as={Link} to="/products">
          Products
        </Nav.Link>
      </Nav>
    
      <Nav>
        <Nav.Link href="#cart">
          <Image
            src={"https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"}
            alt="login"
            className="login"
            style={cartIconStyle}
          />
           <Image
            src={"https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-shopping-bag-icon-png-image_695741.jpg"}
            alt="login"
            className="login"
            style={cartIconStyle}
          />
           <Image
            src={"https://e7.pngegg.com/pngimages/402/481/png-clipart-hamburger-button-drop-down-list-computer-icons-navigation-bars-and-page-menu-templates-text-rectangle.png"}
            alt="login"
            className="login"
            style={cartIconStyle}
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Bar;
