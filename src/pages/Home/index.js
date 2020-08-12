import React from 'react';
import { Container } from 'reactstrap';
import "./style.css"
import headshot from "../../assets/images/headshot.jpg"

function Home() {
    return (
        <Container fluid="md">
            <div id="row-1" className="row justify-content-center">

                <div className="jumbotron col">
                    <section className="avatar">
                        <img id="avatar" className="float-left rounded-circle" alt="Teresa Bruggeman"
                            src={headshot}></img>
                    </section>
                    <section className="bio text-justify">
                            <h1>Hi, I'm Teresa B.</h1>
                            <p>
                                Full Stack Web Developer with a background in software engineering and an advanced degree in Computer Information Systems. Graduate of the University of Arizona Full Stack Web Development program. Disciplined, adaptable, and upbeat collaborator focused on deadlines, bottom lines, and clean lines of code. Well rounded background includes extensive client-facing communication, user interface design, and code installation and customization. Strong technical skills on both front and back ends. Excellent process improvement skills succeeded in condensing workflows to decrease man-hours by over 25%, client-favorite seminar presenter, competent producer of both user-facing and team documentation, successful projects and team leader, respected subject matter expert. Equally comfortable creating alone or on teams, as leader, partner, or disciple.
                                Analytical thinker, insatiable learner, situational adaptor. Likes live music, friendly debate, brain puzzles, and fresh powder.
                            </p>
                            <p className="justify-content-center">My motto: <span className="font-weight-bold cent">"There's <span
                                className="font-italic">always</span> a way."</span></p>
                   </section>
                </div>
            </div>
        </Container>
    )
};

export default Home;