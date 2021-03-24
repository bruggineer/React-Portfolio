import React from "react";
import Card from "react-bootstrap/Card";
import Burgers from "../../assets/images/Burgers2.jpg"
import ExpenseTracker from "../../assets/images/ExpenseTracker58.jpg";
import FoodTrak from "../../assets/images/FoodTrak2.jpg";
import LootTracker from "../../assets/images/LootTracker.jpg";
import PasswordGen from "../../assets/images/PasswordGen.png";
import Shuffle from "../../assets/images/Shuffle2.jpg";
import WeatherDash from "../../assets/images/WeatherDash.jpg";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaExternalLinkSquareAlt, FaChevronCircleRight } from 'react-icons/fa';
import "./style.css";
import { Col, Row, Button } from "react-bootstrap";

export default function ProjectCard(props) {
  console.log(props)

  const images = {
    "Burgers": Burgers,
    "ExpenseTracker": ExpenseTracker,
    "FoodTrak": FoodTrak,
    "LootTracker": LootTracker,
    "PasswordGen": PasswordGen,
    "Shuffle": Shuffle,
    "WeatherDash": WeatherDash
  }

  console.log('card component is re-rendering')

  return (

    <Card bg="dark" text="black" className='my-auto'>
      <section id='sliding-pane' className='slide slide-left h-100'>
        <Col className='slide-content'>
          <h2>{props.title}</h2>
          <p className="card-text">{props.blurb}</p>
          <Row>
            <IconContext.Provider value={{ color: "#f5f5f5", size: "2rem", style: { padding: 0, margin: '0 10px' } }}>
              <Button variant='link' size="sm"><a href={props.site} target="__blank"><FaExternalLinkSquareAlt /></a>See Site</Button>
              <Button variant='link' size="sm"><a href={props.repo} target="__blank"><FaGithubAlt /></a>See Repo</Button>
            </IconContext.Provider>
          </Row>
          {/* <div className='see-more'>
            <h2>See More <FaChevronCircleRight /></h2>
            <div className="more">
            </div>
          </div> */}
        </Col>
        <Row id='card-image' className='row block h-100'>
          <Col className='col my-auto'>
            <Card.Img alt={props.title} src={images[props.img]} />
            {/* <Card.ImgOverlay>
              <Row id='tech-icons' className={props.tech} >
                <p>Showing tech icons here.</p>
              </Row>
              <Row id='concepts' className={props.concepts}>
                <p>listing concepts here</p>
              </Row>
            </Card.ImgOverlay> */}
          </Col>
        </Row>
      </section>
    </Card>
  );
}
