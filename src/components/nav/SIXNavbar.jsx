import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./SIXNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export default function SIXNavbar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar sticky="top" expand="sm" 
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
            collapseOnSelect 
            className="six-navbar">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="logo-wrapper">
                    <img 
                        src="images/sixlab_logo_white.png" 
                        alt="Lab Logo" 
                        className="sixlab-logo"
                        width="90"
                        height="90"
                    />
                    <span className="navbar-title">Sensing Intelligence <br /> and eXperience Lab</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <span className="custom-toggler-icon">
                        <FontAwesomeIcon icon={faBars} color="white" />
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" collapseOnSelect>
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" end className="nav-link-custom" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/people" className="nav-link-custom" onClick={() => setExpanded(false)}>Team</Nav.Link>
                        <Nav.Link as={NavLink} to="/publications" className="nav-link-custom" onClick={() => setExpanded(false)}>Publications</Nav.Link>
                        <Nav.Link as={NavLink} to="/join" className="nav-link-custom" onClick={() => setExpanded(false)}>Join Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
