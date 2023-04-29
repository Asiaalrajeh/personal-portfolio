import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';

export const NavBar = () => {
    const {activeLink, setActiveLink} = useState('home');
    const {scrolled, setScrolled} = useState(false);

    // useEffect(()=> {
    //     const onscroll = () => {
    //         if (window.scrollY > 50){
    //           setScrolled(true);
    //         }else{
    //           setScrolled(true);
    //         }
    //     }

    //     window.addEventListener("scroll", onscroll);

    //     return () => window.removeEventListener("scroll",onscroll);
    // },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    
    return(
        <Navbar expand="lg" >
        <Container>
          <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}