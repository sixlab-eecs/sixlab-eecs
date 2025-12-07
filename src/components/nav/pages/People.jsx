import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogleScholar, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import "./People.css";
import { faculty, phdStudents, masterStudents, undergrads, visitings, alumni } from "../../../data/members";

function MemberCard({ person }) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-1">
            <Card className="person-card h-100 text-center border-0">
                <Card.Img
                    variant="top"
                    src={`/members/${person.img}`}
                    alt={person.name}
                    style={{
                        height: "180px",
                        width: "180px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        margin: "24px auto 0 auto",
                    }}
                />

                <Card.Body>
                    {person.website ? (
                        <Card.Title as="h6">
                        <a
                            href={person.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="student-link"
                        >
                            {person.name}
                        </a>
                        </Card.Title>
                    ) : (
                        <Card.Title as="h6"><p className="student-name">{person.name}</p></Card.Title>
                    )}
                    <Card.Text>
                        {person.title}
                        {person.major ? ` • ${person.major}` : ""}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

function ProfCard({ faculty }) {
    return (
    <Card className="mb-3 px-2 py-3 border-0 flex-row align-items-center faculty-card">
        <Row className="g-3 w-100">
            <Col xs={12} sm={6} md={3}>
            <Card.Img
                src={`/members/${faculty.img}`}
                alt={faculty.name}
                className="rounded"
                style={{
                borderRadius: "50px",
                objectFit: "cover",
                width: "100%",
                aspectRatio: "5 / 6",
                }}
            />
            </Col>
            <Col xs={12} sm={6} md={9}>
                <Card.Body>
                    <Card.Title as="h5">
                    <a
                        href={faculty.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="faculty-link"
                    >
                        {faculty.name}
                    </a>
                    </Card.Title>
                    <Card.Text
                        style={{
                            marginTop: "12px",
                            fontSize: "17px",
                            color: "#444",
                            lineHeight: "1.5",
                        }}
                    >
                        {faculty.bio}
                    </Card.Text>
                </Card.Body>
            </Col>
        </Row>
    </Card>
    );
}

export default function People() {
    return (
        <Container className="mt-4">
            {/* Faculty Section */}
            <h2 className="mb-3 custom-heading">Principal Investigator</h2>
            <ProfCard faculty={faculty} />

            

            {/* Students */}
            <h3 className="mt-1 mb-3 custom-heading">Members</h3>
            <Row>
                {phdStudents.map((student, idx) => (
                <MemberCard key={idx} person={student} />
                ))}
                {masterStudents.map((student, idx) => (
                <MemberCard key={idx} person={student} />
                ))}
                {undergrads.map((student, idx) => (
                <MemberCard key={idx} person={student} />
                ))}
                {visitings.map((student, idx) => (
                <MemberCard key={idx} person={student} />
                ))}
            </Row>

            {/* Alumni */}
            <h3 className="mt-3 mb-2 custom-heading">Alumni</h3>
            <Row>
                {alumni.map((student, idx) => (
                <MemberCard key={idx} person={student} />
                ))}
            </Row>

     
        </Container>
    );
}
