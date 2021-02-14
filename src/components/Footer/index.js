import React from "react";
import "./style.css";
import Resume from "../../assets/Resume.pdf";
import ResumeIcon from "../../assets/resume-icon.png";
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
            <a href="tel:970-286-8313">503-320-2226</a>
          </li>
          <li>
            <a href="mailto:tsbruggeman@gmail.com">bruggineer@gmail.com</a>
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
              src="https://ctl.s6img.com/society6/img/y-xZ_syD7LhIJOGtpdTU08ra6Aw/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/8e29a2e79387449caa28090d71f489e3/~~/github-logo-prints.jpg"
              alt="LinkedIn Logo"
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
              alt="resume"
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
              alt="LinkedIn Logo"
              height="60px"
            ></img>
          </a>
        </Col>
      </div>
    </Container>
  );
}

export default Footer;
