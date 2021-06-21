import React from "react";
import emailjs from 'emailjs-com';
import headshot2 from "../../assets/images/headshot2.jpg";
import './style.css';

export default function ContactForm() {
    console.log('contactform comp is re-rendering')

    function sendEmail(e) {
        e.preventDefault();
        const user_id = process.env.REACT_APP_EMAILJS_USERID;
        console.log(user_id);
        var message = e.target;
        emailjs.sendForm('default_service', 'template_lzpo79e', message, user_id)
            .then((result) => {
                console.log('SUCCESS!');
                alert("Message sent. Thank you.");
            }, (error) => {
                console.log('FAILED...', error);
                alert("Message failed to send.");
            })
        document.getElementById("contact-form").reset()
    }

    //yes, this exposes my user-id to the public but using axios POST failed due to an unresolvable EmailJS server response CORS error.

    return (
        <div className="col-sm-7 px-2 mx-auto d-flex flex-column align-content-stretch contact-content">
            <h1 className='d-flex mt-0'>Let's talk</h1>
            <form id="contact-form" className="contact-form" onSubmit={sendEmail}>
                <div className="d-flex col flex-column form-group">
                    <label htmlFor="comment" className='row'>Message:</label>
                    <textarea name="message" id="comment" className="form-control row" rows="5" maxLength="1000" required ></textarea>
                </div>

                <div className="d-flex col flex-column form-group">
                    <label htmlFor="userName" className='row'>Your name:</label>
                    <input type="text" name="from_name" className="row form-control" required id="userName"
                        aria-describedby="nameHelp"></input>
                </div>

                <div className="d-flex col flex-column form-group">
                    <label htmlFor="userEmail" className='row'>Your email address:</label>
                    <input type="email" name="user_email" className="row form-control" required id="userEmail1"
                        aria-describedby="emailhelp"></input>
                    <small id="email-help" className="row email-text text-muted">I promise not to share your addy.</small>
                </div>

                <div className="d-flex col form-group sub-top">
                    <label htmlFor="submitButton" className='row'>
                        <button type="submit" name="submit" id="submit-button" className="submit-btn btn btn-dark">Send Message</button>
                    </label>
                </div>
            </form>

            <section className="avatar2 d-flex flex-column align-content-stretch col mb-0 mt-5">
                <div className="d-flex">
                    <img id="avatar2" className="row rounded-circle" alt="Teresa Bruggeman as a kid"
                        src={headshot2}></img>
                </div>
                <div className='row peace text-center'>Peace.</div>
            </section>
        </div>
    );
};