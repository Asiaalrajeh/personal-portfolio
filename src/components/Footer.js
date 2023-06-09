import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import github from '../assets/img/icongithub.svg';
import linkedin from '../assets/img/iconlinkedin.svg';
import email from '../assets/img/email.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" id="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="mailto: alrajehasia@gmail.com"><img src={email} alt="Icon" /></a>
              <a href="https://github.com/Asiaalrajeh"><img src={github} alt="github icon" /></a>
              <a href="https://www.linkedin.com/in/asiaalrajeh/"><img src={linkedin} alt="linkedin" /></a>
            </div>
            <p>Copyright 2023 Asiaalrajeh</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}