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
                            <div className="bio-blurb">
                                <p>I'm a Full Stack web developer with a background in software engineering, an advanced degree in Computer Information Systems, and a certificate from the University of Arizona's Full Stack Web Development program.</p>
                                <p className='skills-list'>My skill set includes:</p>
                                <div>
                                    <ul className='ml-3'>
                                        <li>JavaScript</li>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                        <li>React</li>
                                        <li>HTML & CSS</li>
                                        <li>Unix, Linux</li>
                                        <li>MongoDB</li>
                                        <li>MySql</li>
                                        <li>Sequelize ORM</li>
                                        <li>UX/UI</li>
                                        <li>Mobile-First Responsive Design</li>
                                        <li>Agile Development</li>
                                        <li>GitHub</li>
                                        <li>Heroku, Netlify, GH Pages</li>
                                    </ul>
                                </div>
                                <p> I'm a disciplined, adaptable, and upbeat collaborator focused on deadlines, bottom lines, and clean lines of code. As a Full Stack bootcamp graduate, I'm enthusiastically learning and applying more about all aspects of web development every day. My background includes UX/UI design, bespoke web sites, extensive client-facing communication, and enterprise code installation/customization. I'm a client-favorite conference presenter, an ideation champ, and a competent producer of actionable documentation. I am a self-starter who plays extremely well with others.</p>
                                <p>I like live music, friendly debate, and stupid jokes. When my nose isn't in my screen, you'll find me outside.</p>
                            </div>
                        </section>

                        <p className='motto text-center clearfix'>My motto: <span className="font-italic">"There's <span className="font-weight-bold cent"
                        >always</span> a way!"</span>
                        </p>
                    </div>
                </Col>
            </Row >
        </Container >
    )
};