import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Publications.css";
import publications from "../../../data/publication";

export default function Publications() {
    return (
        <Container className="mt-4">
        {publications.map((pub, idx) => (
            <Card className="publication-card mb-1 p-3 d-flex flex-row align-items-stretch border-0">
            <Row>
                <Col xs={12} md={3}>
                    {/* <a href={pub.links.PDF} target="_blank" rel="noopener noreferrer"> */}
                    <a href={pub.links.PDF}>
                        <img
                        src={"publications/" + pub.thumbnail}
                        alt={pub.title}
                        className="img-fluid object-fit-cover rounded w-100"
                        style={{
                            height: "145px",
                            border: "1px solid #ccc",
                            objectFit: "cover",
                        }}
                        />
                    </a>
                </Col>

                <Col xs={12} md={9} className="d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="pub-title mb-1">
                        <a
                            href={pub.links.PDF}
                            // target="_blank"
                            // rel="noopener noreferrer"
                        >
                            {pub.title}
                        </a>
                        {pub.highlight && (
                            <span className="custom-badge ms-2">
                            {pub.highlight}
                            </span>
                        )}
                        </h5>
                        <p className="pub-authors mb-1 text-muted">{pub.authors}</p>
                        <p className="pub-venue mb-2" style={{ fontStyle: "italic" }}>{pub.venue}</p>
                    </div>

                    <div className="pub-links mt-2">
                        {Object.entries(pub.links).map(([label, url]) => (
                        <a
                            href={url}
                            key={label}
                            className="btn btn-sm btn-outline-secondary me-2 mb-2"
                            // target="_blank"
                            // rel="noopener noreferrer"
                        >
                            {label}
                        </a>
                        ))}
                    </div>
                </Col>
            </Row>
        </Card>      
        ))}
        </Container>
    );
}