import React from 'react';
import ContactForm from "../../components/ContactForm";
import Container from 'react-bootstrap/Container';

export default function Contact() {
    console.log('contact view is re-rendering')

    return (
        <Container fluid no-gutters>
            <section id="contact-view" className="row justify-content-center mt-10">
                <div className="col-sm-7 pt-4 px-2">
                    <h1>Let's talk</h1>
                    <ContactForm ></ContactForm>
                </div>
                <br />
            </section>
        </Container>
    )
};