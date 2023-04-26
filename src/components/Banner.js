import { Col, Container,Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import github from '../assets/img/icongithub.svg';
import linkedin from '../assets/img/iconlinkedin.svg';
import avatar from '../assets/img/avatar.png';


const rule = `I'm a front end developer`;
export const Banner = () => {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const timeout = setTimeout(()=> {
        setTyped(rule.slice(0, typed.length + 1))
    },130)

    return () => clearTimeout(timeout)
  },[typed])

    return(
      <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h2>Hellooo! I'm Asia Alrajeh </h2>
                    <span className="blinking-cursor">{typed}</span>
                    <br></br>
                    <div className="social-icon">
                     <a href="https://github.com/Asiaalrajeh"><img src={github} alt="github icon" /></a>
                     <a href="#"><img src={linkedin} alt="" /></a>
                     </div>
                </Col>
                <Col xs={12} md={6} xl={4}>
                  <img src={avatar} alt="Avatar img" id="avatar"></img>
                  
                </Col>
            </Row>
        </Container>
      </section>
    )
}