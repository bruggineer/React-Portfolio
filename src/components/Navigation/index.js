import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default function Navigation() {
    console.log('nav comp is re-rendering')
    return (
        <>
            <Container fluid className='px-0'>
                <Navbar collapseOnSelect bg='dark' variant='dark' expand='sm' static='top'>
                    <Navbar.Brand href='/bio' className='my-name'>Teresa Bruggeman</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
                        <Nav>
                            <Nav.Link as={Link} to='/bio' eventKey='0'>Bio</Nav.Link>
                            <Nav.Link as={Link} to='/portfolio' eventKey='1'>Portfolio</Nav.Link>
                            <Nav.Link as={Link} to='/contact' eventKey='2'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    );
}