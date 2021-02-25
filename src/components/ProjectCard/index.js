import React from "react";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Burgers from "../../assets/images/Burgers.jpg"
import ExpenseTracker from "../../assets/images/ExpenseTracker.png";
import FoodTrak from "../../assets/images/FoodTrak.png";
import LootTracker from "../../assets/images/LootTracker-small.png";
import Passwordgenerator from "../../assets/images/Passwordgenerator.png";
import Shuffle from "../../assets/images/shuffle2.png";
import WeatherDash from "../../assets/images/WeatherDash.png";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import { IconContext } from "react-icons";
import { FaGithubAlt, FaExternalLinkSquareAlt, FaChevronCircleRight } from 'react-icons/fa';
import Image from 'react-bootstrap/Image'
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
          <Image className="card-img align-middle bg-dark" alt={props.title} src={images[props.img]} fluid />
        </div>
        <div className="intro bg-dark">
          <div className="description card text-white bg-dark">
            <h2>{props.title}</h2>
            <p className="card-text">{props.blurb}</p>
            <p className="small">{props.team}</p>
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
      </Card>
    </Container>
  );
}
