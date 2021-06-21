import React from 'react';
import ContactForm from "../../components/ContactForm";
import Container from 'react-bootstrap/Container';

export default function Contact() {
    console.log('contact view is re-rendering')

    return (
        <Container fluid id="contact-view" className='no-gutters'>
            <ContactForm />
        </Container>
    )
};