import SIXNavbar from "./nav/SIXNavbar";
import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';

export default function SIX() {
    return (
        <>
            <SIXNavbar />
            <Container fluid className="mt-4">
                <Outlet />
                <footer className="text-center text-muted mt-4 mb-3" style={ {fontSize: "0.6rem"} }>
                    © Sensing Intelligence and eXperience (SIX) Lab 2025
                </footer>
            </Container>
        </>
    );
}