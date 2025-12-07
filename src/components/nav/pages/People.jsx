import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogleScholar, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import "./People.css";


function PersonCard({ person }) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-1">
            <Card className="person-card h-100 text-center border-0">
                <Card.Img
                    variant="top"
                    src={`/members/${member.img}`}
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
                        <Card.Title as="h6">{person.name}</Card.Title>
                    )}
                    {person.major && (
                        <Card.Text>
                        {person.major}
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default function People() {
    return (
        <Container className="mt-4">
            {/* Faculty Section */}
            <h2 className="mb-3 custom-heading">Principal Investigator</h2>
            <Card className="mb-3 px-2 py-3 border-0 flex-row align-items-center faculty-card">
                <Row className="g-3 w-100">
                    <Col xs={12} sm={6} md={3}>
                    <Card.Img
                        src={faculty.img}
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
                                {/* Social Media 
                            <div className="social-icons mt-2">
                                <a href="https://scholar.google.com/citations?user=n5INNYUAAAAJ&hl=en&oi=ao" className="social-icon" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGraduationCap} className="me-3" style={{ fontSize: "20px" }} />
                                </a>
                                <a href="https://www.linkedin.com/company/wix-com?trk=biz-companies-cym" className="social-icon" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="me-3" size="2x" style={{ fontSize: "20px" }} />
                                </a>
                                <a href="hhttps://x.com/wix" className="social-icon" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="me-3" size="2x" style={{ fontSize: "20px" }} />
                                </a>
                                <a href="https://www.facebook.com/wix" className="social-icon" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="me-3" size="2x" style={{ fontSize: "20px"}}/>
                                </a>
                            </div>
                                */}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            {/* Students */}
            <h3 className="mt-1 mb-3 custom-heading">Members</h3>
            <Row>
                {phdStudents.map((student, idx) => (
                <PersonCard key={idx} person={student} />
                ))}
                {masterStudents.map((student, idx) => (
                <PersonCard key={idx} person={student} />
                ))}
                {undergrads.map((student, idx) => (
                <PersonCard key={idx} person={student} />
                ))}
                {visitings.map((student, idx) => (
                <PersonCard key={idx} person={student} />
                ))}
            </Row>

            {/* Alumni */}
            <h3 className="mt-3 mb-2 custom-heading">Alumni</h3>
            <Row>
                {alumni.map((student, idx) => (
                <PersonCard key={idx} person={student} />
                ))}
            </Row>

        {/* 
        <h3 className="mt-5 mb-3 custom-heading">Master Students</h3>
        <Row>
            {masterStudents.map((student, idx) => (
            <PersonCard key={idx} person={student} />
            ))}
        </Row>
        <h3 className="mt-5 mb-3 custom-heading">Undergraduate Students</h3>
        <Row>
            {undergrads.map((student, idx) => (
            <PersonCard key={idx} person={student} />
            ))}
        </Row>
        */}
        </Container>
    );
}
