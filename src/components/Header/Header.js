import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from './../../images/logo.jpg';
import './Header.css';

const Header = () => {
  const { user,
    Logout} = useAuth();
    return (
        <div>
<Navbar className="header" expand="lg">
  <Container>
    <Navbar.Brand className="text-white" to="/"> 
    <img width="60px" className='mx-2' src={logo} alt="Logo" /> 
    Creative House</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={NavLink} className="text-white" to="/home">Home</Nav.Link>
        <Nav.Link as={NavLink} className="text-white" to="/item">Our Features</Nav.Link>
        <Nav.Link as={NavLink} className="text-white" to="/about">About</Nav.Link>
        <Nav.Link as={NavLink} className="text-white" to="/contact">Contact</Nav.Link>
      {!user.email ?  (<>
        <Nav.Link as={NavLink} className="text-white" to="/login">Login</Nav.Link>
        <Nav.Link as={NavLink} className="text-white" to="/register">Register</Nav.Link>
        </>
        ) : (
         <>
         <Nav.Link as={NavLink} className="text-white" to="/dashboard">Dashboard</Nav.Link>

             <span className="text-white align-items-center mt-2">{user.displayName}</span>
          <Nav.Link className="text-white ">
            <button  className="btn btn-info p-1" onClick={Logout}>Logout</button>
          </Nav.Link>
         </>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;