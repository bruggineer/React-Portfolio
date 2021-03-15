import React from "react";
//import { Component, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
//  
// import "react-sliding-pane/dist/react-sliding-pane.css"
import Burgers from "../../assets/images/Burgers.jpg"
import ExpenseTracker from "../../assets/images/ExpenseTracker.png";
import FoodTrak from "../../assets/images/FoodTrak.png";
import LootTracker from "../../assets/images/LootTracker-small.png";
import Passwordgenerator from "../../assets/images/Passwordgenerator.png";
import Shuffle from "../../assets/images/shuffle2.png";
import WeatherDash from "../../assets/images/WeatherDash.png";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaExternalLinkSquareAlt, FaChevronCircleRight } from 'react-icons/fa';
import "./style.css";

export default function ProjectCard(props) {
  console.log(props)

  const images = {
    "Burgers": Burgers,
    "ExpenseTracker": ExpenseTracker,
    "FoodTrak": FoodTrak,
    "LootTracker": LootTracker,
    "Passwordgenerator": Passwordgenerator,
    "Shuffle": Shuffle,
    "WeatherDash": WeatherDash
  }

  // const [state, setState] = useState({
  //   isPaneOpen: true,
  //   isPaneOpenLeft: true,
  // })

  console.log('card component is re-rendering')

  return (
    <Container fluid className='px-0' id="portfolio-main" attr={props.id} data-section-name={props.img}>
      <Card bg="dark" text="white">
        <section id='card-image'>
          <div className="img-box bg-dark product">
            <Image fluid className="card-img align-middle" alt={props.title} src={images[props.img]} />
          </div>
        </section>
        <section id='tech-icons' className={props.tech} >
          <p>Showing tech icons here.</p>
        </section>
        <section id='concepts' className={props.concepts}>
          <p>listing concepts here</p>
        </section>
        <section id='sliding-pane'>
          {/* <SlidingPane
            closeIcon={<div>Some div containing custom close icon.</div>}
            isOpen={state.isPaneOpenLeft}
            title="Hey, it is optional pane title.  I can be React component too."
            from="left"
            width="200px"
            onRequestClose={() => setState({ isPaneOpenLeft: false })}
          >
            <div>And I am pane content on left.</div>
          </SlidingPane> */}
          <div className="intro bg-dark">
            <div className="description card text-white bg-dark">
              <h2>{props.title}</h2>
              <p className="card-text">{props.blurb}</p>
              <div>
                <IconContext.Provider value={{ color: "#fff", size: "4em", style: { padding: "2rem" }, className: "link" }}>
                  <a href={props.site} target="__blank" className="link"><FaExternalLinkSquareAlt /></a>
                  <a href={props.repo} target="__blank" className="link"><FaGithubAlt /></a>
                </IconContext.Provider>
              </div>
            </div>
            <div className="more">
              <FaChevronCircleRight />
            </div>
          </div>
        </section>
      </Card>
    </Container>
  );
}
