import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Resume from "../../assets/Bruggeman-Resume-v2.2.pdf";
import ResumeIcon from "../../assets/resume-64.png";
import Octocat from "../../assets/github-8-128.png"
import LinkedIn from "../../assets/linkedin-6-128.png"
import "./style.css";

function Footer() {

  return (
    <Container fluid className="footer">
      <Row className="px-1">
        <Col sm={6} className="d-flex flex-column footer-contact">
          <div>
            <a className="cta align-left" href="tel:503-320-2226" target="_self">503.320.2226</a>
          </div>
          <div className="pt-3">
            <a className="cta align-left" href="mailto:bruggineer@gmail.com" target="_blank" rel="noopener noreferrer">bruggineer@gmail.com</a>
          </div>
        </Col>
        <Col sm={6} className="d-flex justify-content-center justify-content-sm-end align-items-center pt-3 pt-md-0 footer-links list-unstyled">
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id='resume-icon'
              className="icons"
              src={ResumeIcon}
              alt="resume icon link"
              height="60px"
            ></img>
          </a>
          <a
            href="https://github.com/bruggineer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="github-icon"
              className="icons"
              src={Octocat}
              alt="GitHub Logo link"
              height="60px"
            ></img>
          </a>

          <a
            href="https://www.linkedin.com/in/tsbruggeman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icons"
              id="linkedin-icon"
              src={LinkedIn}
              alt="LinkedIn Logo link"
              height="60px"
            ></img>
          </a>
        </Col>
      </Row>
      <div className="icon-call-out d-flex justify-content-center align-items-center">Checkmark icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </Container>
  );
}

export default Footer;
