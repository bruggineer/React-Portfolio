import React from 'react';
import Container from 'react-bootstrap/Container';
import headshot from "../../assets/images/Headshot-BW.jpg"
import { Col, Row } from 'react-bootstrap';
import "./style.css"

export default function Home() {
    console.log('bio view is re-rendering')

    return (
        <Container fluid className='no-gutters'>
            <Row id="bio-view" className="mt-10">
                <Col className="jumbotron">
                    <div className='mx-auto'>
                        <section className="avatar">
                            <img id="avatar" className="rounded-circle" alt="Teresa Bruggeman"
                                src={headshot}></img>
                        </section>

                        <section className="bio">
                            <h1 className='greeting d-flex flex-wrap'><div className='g-1'>Hello, I'm Teresa. </div><div className="g-2">Friends call me T.</div></h1>
                            <div className="bio-blurb mt-2 ">
                                <p>I'm a Full Stack web developer with a background in software engineering, an advanced degree in Computer Information Systems, and a certificate from the Univerisity of Arizona's Full Stack Web Development program.</p>
                                <p className='skills-list'>I have experience with:
                                <ul className='ml-3'>
                                        <li>JavaScript</li>
                                        <li>Nodejs</li>
                                        <li>Express</li>
                                        <li>React</li>
                                        <li>MongoDb</li>
                                        <li>MySql</li>
                                        <li>Sequelize</li>
                                        <li>Mobile-first responsive design</li>
                                        <li>Agile Development</li>
                                    </ul>
                                </p>
                                <p> I'm a disciplined, adaptable, and upbeat collaborator focused on deadlines, bottom lines, and clean lines of code. My background includes user interface design, extensive client-facing communication, and code installation/customization. I'm a client-favorite conferece presenter, an ideation champ, and a competent producer of actionable documentation. I'm equally happy creating alone or as an Agile Development Team member.</p>
                                <p>I like live music, friendly debate, and excellent wine. When my nose isn't in my screen, you'll find me outside.</p>
                            </div>
                        </section>

                        <p className='motto text-center clearfix'>My motto: <span className="font-weight-bold cent">"There's <span
                            className="font-italic">always</span> a way."</span>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container >
    )
};