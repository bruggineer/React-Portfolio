import React from "react";
import "./style.css";
import Resume from "../../assets/Bruggeman-Resume-v2.1.pdf";
import ResumeIcon from "../../assets/resume-icon.png";
import Octocat from "../../assets/GitHub-Mark-64px.png"
import LinkedIn from "../../assets/linkedin-svgrepo-com.svg"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container fluid="true" className="footer p-3 mx-auto">
      <div className="row">
        <Col md={6} className="footer-contact list-unstyled mx-auto">
          <li>Teresa Bruggeman</li>
          <li>
            <a href="tel:503-320-2226" target="_self">503-320-2226</a>
          </li>
          <li>
            <a href="mailto:bruggineer@gmail.com" target="_blank" rel="noopener noreferrer">bruggineer@gmail.com</a>
          </li>
        </Col>
        <Col md={6} className="footer-links list-unstyled mx-auto">
          <a
            className="px-1"
            href="https://github.com/bruggineer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="github"
              className="float-md-right pt-2 pt-md-0"
              src={Octocat}
              alt="GitHub Logo link"
              height="60px"
            ></img>
          </a>
          <a
            className="px-1"
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="float-md-right pt-2 pt-md-0"
              src={ResumeIcon}
              alt="resume icon link"
              height="60px"
            ></img>
          </a>
          <a
            className="px-1"
            href="https://www.linkedin.com/in/tsbruggeman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="float-md-right pt-2 pt-md-0"
              id="linkedin"
              src={LinkedIn}
              alt="LinkedIn Logo link"
              height="60px"
            ></img>
          </a>
        </Col>
      </div>
    </Container>
  );
}

export default Footer;
