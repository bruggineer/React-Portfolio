import React from 'react';
import Container from 'react-bootstrap/Container';
import headshot from "../../assets/images/Headshot-BW.jpg";
import checked from "../../assets/images/checked.png";
import skills from '../../assets/data/skills.json';
import "./style.css";

export default function Home() {

    return (
        <Container fluid className='container-xl px-2 mx-auto'>
            <div id="bio-view" className="content">
                <div>
                    <section className="avatar">
                        <img id="avatar" className="rounded-circle" alt="Teresa Bruggeman"
                            src={headshot}></img>
                    </section>

                    <section className="bio">
                        <h1 className='greeting d-flex flex-wrap'><div className='g-1'>Hello, I'm Teresa. </div><div className="g-2">Friends call me T.</div></h1>
                        <div className="bio-blurb">
                            <p>I'm a Full Stack web developer with a background in software engineering, an advanced degree in Computer Information Systems, and a certificate from the University of Arizona's Full Stack Web Development program.</p>
                            <h3 className='skills-list'>My skill set includes:</h3>
                            <div>
                                <ul className='ml-0 pl-0'>
                                    <div>
                                        {skills.map((skill) => (
                                            <div key={skill}>
                                                <img id="checkmark-icon" className="check-mark" src={checked} alt="checkmark" height="16px" width="16px"></img>
                                                <span className="ml-3">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </ul>
                            </div>
                            <p> I'm a disciplined, adaptable, and upbeat collaborator focused on deadlines, bottom lines, and clean lines of code. My background includes UX/UI design, bespoke web sites, extensive client-facing communication, and enterprise code installation/customization. I'm a client-favorite conference presenter, an ideation champ, and a competent producer of actionable documentation. I am a self-starter who plays extremely well with others and, as a Full Stack bootcamp graduate, I enthusiastically seek, absorb, and apply more knowledge about all aspects of web development every day.</p>
                            <p>I like live music, friendly debate, and stupid jokes. When my nose isn't in my screen, you'll find me outside.</p>
                        </div>
                    </section>

                    <p className='motto text-center clearfix'>My motto: <span className="font-italic">"There's <span className="font-weight-bold cent"
                    >always</span> a way!"</span>
                    </p>
                </div>
            </div>
        </Container >
    )
};