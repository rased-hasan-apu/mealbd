import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Navigation.css';
const Navigation = () => {
    return (
        <Navbar  expand="lg" className="bg-body-tertiary " bg="dark"  data-bs-theme="dark">
      <Container >
        <Navbar.Brand className='fs-4 fw-bolder' href="#home">Meal_Db</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link className='text-decoration-none text-dark px-3 text-white fs-4 fw-bolder' to='/'>Home</Link>
            <Link className='text-decoration-none text-dark px-3 text-white fs-4 fw-bolder' to='/about'>About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navigation;