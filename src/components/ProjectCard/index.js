import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row, Container } from "react-bootstrap";
import Burgers from "../../assets/images/Burgers2.jpg"
import ExpenseTracker from "../../assets/images/ExpenseTracker58.jpg";
import FoodTrak from "../../assets/images/FoodTrak2.jpg";
import LootTracker from "../../assets/images/LootTracker.jpg";
import PasswordGen from "../../assets/images/PasswordGen.png";
import Shuffle from "../../assets/images/Shuffle2.jpg";
import WeatherDash from "../../assets/images/WeatherDash.jpg";
import { FaGithubAlt, FaExternalLinkSquareAlt, FaChevronCircleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

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

  console.log('card component is rendering')

  return (
    <Card bg="dark" text="black" className='my-auto mx-auto'>
      <div className='card-image' style={{ backgroundImage: `url(${images[props.img]}` }}>
        <div className='trigger-slide-left'><FaChevronCircleRight className='chevron' /></div>
        {/* left slider */}
        <div attr='sliding-pane' className='slide slide-left h-100'>
          <div className='slider d-flex flex-column flex-wrap justify-content-center align-items-center slide-content-left'>
            <h1 className='mb-0 font-weight-bolder'>{props.title}</h1>
            <p className="blurb mt-2 mb-3">{props.blurb}</p>
            <Container>
              <Row className='justify-content-center'>
                {/* stack them until hit small,  */}
                <div className='col-10 col-sm col-lg-4'>
                  <a className="btn btn-secondary btn-sm my-1 w-100 align-middle" href={props.site} target="__blank" style={{ color: '#f5f5f5' }}><FaExternalLinkSquareAlt id="links" className="mr-2 align-middle link-icon" /><span className="align-middle">The App</span></a>
                </div>
                <div className='col-10 col-sm col-lg-4' >
                  <a className="btn btn-secondary btn-sm my-1 w-100 align-middle" href={props.repo} target="__blank" style={{ color: '#f5f5f5' }}><FaGithubAlt id="links" className="mr-2 github-icon align-middle" /><span className="align-middle">The Repo</span></a>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        {/* bottom slider */}
        <div attr='sliding-pane' className='slide slide-up h-100'>
          <Col className='slider slide-content-up d-flex flex-column flex-wrap justify-content-center align-items-center'>
            <p className="blurb text-monospace">{props.blurb2}</p>
          </Col>
        </div>
      </div >
    </Card >
  );
}
