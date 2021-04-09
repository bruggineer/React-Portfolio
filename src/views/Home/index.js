import React from 'react';
import Container from 'react-bootstrap/Container';
import "./style.css"
import headshot from "../../assets/images/Headshot-BW.jpg"
import { Col } from 'react-bootstrap';

export default function Home() {
    console.log('bio view is re-rendering')

    return (
        <Container fluid no-gutters>
            <div id="bio-view" className="row mt-10 justify-content-center'">
                <Col className='bio-box'>
                    <div className="jumbotron col">
                        <div className='mx-auto'>

                            <section className="avatar">
                                <img id="avatar" className="rounded-circle" alt="Teresa Bruggeman"
                                    src={headshot}></img>
                            </section>

                            <section className="bio text-justify">
                                <h1 className='greeting d-flex flex-wrap'><div className='g-1'>Hi, I'm Teresa. </div><div className="g-2">My friends call me Tee.</div></h1>
                                <p className="bio-blurb mt-2 ">
                                    I'm a Full Stack Web Developer with a background in software engineering, an advanced degree in Computer Information Systems, and a certificate from the UofA's (Tucson) Full Stack Web Development program. I'm a disciplined, adaptable, and upbeat collaborator focused on deadlines, bottom lines, and clean lines of code. I have strong technical skills with JavaScript, Node, React, MongoDB, and MySql. My background includes user interface design, extensive client-facing communication, and code installation/customization. I'm a client-favorite conferece presenter, an ideation champ, and a competent producer of actionable documentation. I'm equally happy creating alone or as an Agile Development Team member. I like live music, friendly debate, and excellent wine. When my nose isn't in my screen, you'll find me outside.
                                </p>
                            </section>

                            <p className='motto text-center clearfix'>My motto: <span className="font-weight-bold cent">"There's <span
                                className="font-italic">always</span> a way."</span>
                            </p>
                        </div>
                    </div>
                </Col>
            </div>
        </Container >
    )
};