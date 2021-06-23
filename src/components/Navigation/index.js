import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default function Navigation() {

    return (
        <>
            <Container fluid className='px-0'>
                <Navbar collapseOnSelect variant='dark' expand='sm' static='top'>
                    <Navbar.Brand as={Link} to='/bio' eventkey='3' className='my-name'>Teresa Bruggeman</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' className='link-names justify-content-end'>
                        <Nav>
                            <Nav.Link as={Link} id='bio' to='/bio' eventkey='0'>Bio</Nav.Link>
                            <Nav.Link as={Link} id='portfolio' to='/portfolio' eventkey='1'>Portfolio</Nav.Link>
                            <Nav.Link as={Link} id='contact' to='/contact' eventkey='2'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    );
}