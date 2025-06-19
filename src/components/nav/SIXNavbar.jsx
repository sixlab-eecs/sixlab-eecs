import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import crest from "../../assets/react.svg";
import "./SIXNavbar.css";

export default function SIXNavbar() {
    return (
        <Navbar bg="light" variant="light" sticky="top" expand="sm" collapseOnSelect className="six-navbar">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                    <img 
                        src="/umich.jpeg" 
                        alt="University of Michigan Logo" 
                        className="d-inline-block align-top me-2"
                        width="30"
                        height="30"
                    />
                    {/*<img
                        alt="SIX Logo"
                        src={crest}
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                    />*/}
                    <span className="navbar-title">SIX Lab</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" end className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/people" className="nav-link-custom">Team</Nav.Link>
                        <Nav.Link as={NavLink} to="/publications" className="nav-link-custom">Publications</Nav.Link>
                        <Nav.Link as={NavLink} to="/join" className="nav-link-custom">Join Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
