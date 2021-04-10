import React from 'react';
import ContactForm from "../../components/ContactForm";
import Container from 'react-bootstrap/Container';

export default function Contact() {
    console.log('contact view is re-rendering')

    return (
        <Container fluid no-gutters>
            <section id="contact-view" className="row mt-10">
                <div className="col-sm-7 px-2 mx-auto contact-content">
                    <h1>Let's talk</h1>
                    <ContactForm ></ContactForm>
                </div>
                <br />
            </section>
        </Container>
    )
};