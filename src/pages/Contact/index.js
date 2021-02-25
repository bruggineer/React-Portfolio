import React from 'react';
import "./style.css";
import ContactForm from "../../components/ContactForm";
import Container from 'react-bootstrap/Container';

function Contact() {
    return (
        <Container fluid="md">
            <section className="row justify-content-center">
                <div className="col-md-7 mt-2">
                    <h1>Let's talk</h1>
                    <ContactForm ></ContactForm>
                </div>
                <br />
            </section>
        </Container>
    )
};

export default Contact;