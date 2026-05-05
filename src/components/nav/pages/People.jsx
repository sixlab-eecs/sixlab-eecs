import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./People.css";
import { faculty, phdStudents, masterStudents, undergrads, visitings, alumni } from "../../../data/members";

function MemberCard({ person, showImage = true }) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-1">
            <Card className={`person-card h-100 text-center border-0 ${showImage ? "" : "text-only"}`}>
                {showImage && (
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
                )}

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

export default function People() {
    return (
        <Container className="mt-4">
            {/* Members */}
            <h2 className="mb-3 custom-heading">Members</h2>
            <Row>
                <MemberCard person={faculty} />
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
            <ul className="alumni-list">
                {alumni.map((student, idx) => (
                    <li key={idx}>
                        <span className="alumni-name">{student.name}</span>
                        <span className="alumni-title">
                            {student.title}
                            {student.major ? ` • ${student.major}` : ""}
                        </span>
                    </li>
                ))}
            </ul>

            <img
                className="group-photo"
                src="/images/group_photos/sixlab-260429-1.jpg"
                alt="SIX Lab group"
            />
        </Container>
    );
}
