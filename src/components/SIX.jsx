import SIXNavbar from "./nav/SIXNavbar";
import { Outlet } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';
import EECSImg from "../assets/eecs-logo.png";

export default function SIX() {
    return (
        <>
            <SIXNavbar />
            <Container fluid className="mt-4">
                <Outlet />
                <footer className="text-muted mt-4 mb-3">
                    <Row className="justify-content-center align-items-center text-center">
                        <Col xs="auto">
                            <Image
                                src={EECSImg}
                                alt="EECS Logo"
                                height={35}
                                className="me-2"
                                style={{ opacity: 0.8 }}
                            />
                        </Col>
                        <Col xs="auto" className="small" style={{ fontSize: "0.65rem", opacity: 0.8}}>
                            © Sensing Intelligence and eXperience (SIX) Lab 2025
                        </Col>
                    </Row>
                </footer>
            </Container>
        </>
    );
}
