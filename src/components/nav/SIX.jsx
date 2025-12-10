import SIXNavbar from "./SIXNavbar";
import { Outlet } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';

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
                                src="\images\logo-eecs-1.svg"
                                alt="EECS Logo"
                                height={40}
                                className="me-2"
                                style={{ opacity: 0.8 }}
                            />
                        </Col>
                        <Col xs="auto" className="small" style={{ fontSize: "14px", opacity: 0.8}}>
                            © Sensing Intelligence and eXperience (SIX) Lab 2025
                        </Col>
                    </Row>
                </footer>
            </Container>
        </>
    );
}
