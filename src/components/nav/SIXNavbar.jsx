import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import crest from "../../assets/react.svg";

export default function SIXNavbar() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        alt="SIX Logo"
                        src={crest}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    Welcome to SIX Lab!
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/people">Team</Nav.Link>
                        <Nav.Link as={NavLink} to="/publications">Publication</Nav.Link>
                        <Nav.Link as={NavLink} to="/join">Get Involved</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
