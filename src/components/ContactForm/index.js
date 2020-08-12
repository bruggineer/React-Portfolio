import React from "../../../node_modules/react";
import emailjs from '../../../node_modules/emailjs-com';

export default function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_0JIjqspv', e.target, 'user_q7Y4TwUydLQKj2h4J96gv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            const target="";
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
                <label htmlFor="comment">Message:</label>
                <textarea name="message" className="form-control" rows="5" maxLength="1000" required ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="messengerEmail">Your email address</label>
                <input type="email" name="user_email" className="form-control" required id="messengerEmail1"
                    aria-describedby="emailHelp"></input>
                <small id="emailHelp" className="form-text">I'll never share your email with anyone
                            else.</small>
            </div>

            <div className="form-group">
                <section method="post" action="contact.php">
                    <button type="submit" name="submit" className="btn btn-dark">Send Message</button>
                </section>
            </div>
        </form>
    )
}