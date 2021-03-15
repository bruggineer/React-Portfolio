import React from "react";
import emailjs from 'emailjs-com';
import './style.css'

export default function ContactForm() {
    console.log('contactform comp is re-rendering')

    function sendEmail(e) {
        e.preventDefault();
        const user_id = process.env.REACT_APP_USER;
        console.log(user_id);
        var message = e.target;
        emailjs.sendForm('default_service', 'template_0jgqmbw', message, user_id)
            .then((result) => {
                console.log('SUCCESS!');
                alert("Message sent. Thank you.");
            }, (error) => {
                console.log('FAILED...', error);
                alert("Message failed to send.");
            })
        document.getElementById("contact-form").reset()
    }

    return (
        <form id="contact-form" className="contact-from" onSubmit={sendEmail}>
            <div className="form-group">
                <label htmlFor="comment">Message:</label>
                <textarea name="message" id="comment" className="form-control" rows="5" maxLength="1000" required ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="userName">Your name, please</label>
                <input type="text" name="from_name" className="form-control" required id="userName"
                    aria-describedby="nameHelp"></input>
            </div>

            <div className="form-group">
                <label htmlFor="userEmail">Your email address</label>
                <input type="email" name="user_email" className="form-control" required id="userEmail1"
                    aria-describedby="emailHelp"></input>
                <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone
                            else.</small>
            </div>

            <div className="form-group">
                <label htmlFor="submitButton">
                    <button type="submit" name="submit" id="submitButton" className="btn btn-dark">Send Message</button>
                </label>
            </div>
        </form>
    );
};