import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect bg='dark' variant='dark' expand='sm' fixed='top'>
                <Container>
                    <Navbar.Brand href='/bio'>Teresa Bruggeman</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Link as={Link} to='/bio' activeClassName='active' eventKey='0'>Bio</Nav.Link>
                            <Nav.Link as={Link} to='/portfolio' activeClassName='active' eventKey='1'>Portfolio</Nav.Link>
                            <Nav.Link as={Link} to='/contact' activeClassName='active' eventKey='2'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}