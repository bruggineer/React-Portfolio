import React from "react";
import "./style.css";
import Resume from "../../assets/Bruggeman-Resume-v2.1.pdf";
import ResumeIcon from "../../assets/pdf-128.png";
import Octocat from "../../assets/github-8-128.png"
import LinkedIn from "../../assets/linkedin-6-128.png"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Footer() {
  console.log('footer comp is re-rendering');

  return (
    <Container fluid className="footer">
      <div px-1 className="row px-1">
        <Col sm={6} className="d-flex flex-column footer-contact list-unstyled">
          <div>
            <a className="cta align-left" href="tel:503-320-2226" target="_self">503.320.2226</a>
          </div>
          <div>
            <a className="cta align-left" href="mailto:bruggineer@gmail.com" target="_blank" rel="noopener noreferrer">bruggineer@gmail.com</a>
          </div>
        </Col>
        <Col sm={6} className="d-flex justify-content-center justify-content-sm-end align-items-center footer-links list-unstyled">
          <a
            href="https://github.com/bruggineer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="github-icon"
              className="pt-2 pt-md-0 icons"
              src={Octocat}
              alt="GitHub Logo link"
              height="60px"
            ></img>
          </a>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id='resume-icon'
              className="pt-2 pt-md-0 icons"
              src={ResumeIcon}
              alt="resume icon link"
              height="60px"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/tsbruggeman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="pt-2 pt-md-0 icons"
              id="linkedin-icon"
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
