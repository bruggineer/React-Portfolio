import React, { Component, useState } from "../../../node_modules/react";
import { render } from "../../../node_modules/react-dom";
import SlidingPane from "../../../node_modules/react-sliding-pane";
import "../../../node_modules/react-sliding-pane/dist/react-sliding-pane.css";
import Burgers from "../../assets/images/Burgers.jpg"
import ExpenseTracker from "../../assets/images/ExpenseTracker.png";
import FoodTrak from "../../assets/images/FoodTrak.png";
import LootTracker from "../../assets/images/LootTracker-small.png";
import Passwordgenerator from "../../assets/images/Passwordgenerator.png";
import Shuffle from "../../assets/images/shuffle2.png";
import WeatherDash from "../../assets/images/WeatherDash.png";
import { Card, Row } from "../../../node_modules/reactstrap";
import { Container } from '../../../node_modules/reactstrap';
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

  return (
    <Container id="portfolio-main" className="bg-dark" attr={props.id} data-section-name={props.img}>
      <Card bg="dark" text="white">
        <div className="img-box bg-dark product">
          <img className="card-img align-middle bg-dark" alt={props.title} src={images[props.img]} />        </div>
        <div id="slide" className="intro bg-dark">
            <div className="description card text-white bg-dark">
                <h2>{props.title}</h2>
                <p className="card-text">{props.blurb}</p>
                <p className="small">{props.team}</p>
                <p><a href={props.site} target="__blank">See App in Action</a></p>
                <p><a href={props.repo} target="__blank">Project Repository</a></p>
                <span className="viewmore">+</span>
            </div>
        </div>
      </Card>
    </Container>
  );
}
      