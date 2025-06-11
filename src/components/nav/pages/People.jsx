import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogleScholar, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
// import images from assets
import JunyiImg from "../../../assets/Junyi.png";
import defaultImg from "../../../assets/NA.svg";
import "./People.css";

const faculty = {
    name: "Junyi Zhu",
    website: "https://www.junyizhu.com/",
    img: JunyiImg,
    bio: `Junyi is an Assistant Professor at University of Michigan, Electrical Engineering and Computer Science (EECS) Department.
    He received his Ph.D. in Computer Science from Massachusetts Institute of Technology and B.S. in Electrical & Computer Engineering from University of Washington.
    With his background in health sensing, fabrication and human-computer interaction, he is uniquely positioned to design and fabricate personal health and medical devices, build signal processing models for individual patients and their specific conditions, and deploy his devices in studies with doctors and patients.`,
};

const phdStudents = [
    {
        name: "Jiale Zhang",
        img: defaultImg,
        major: "PhD student",
        website: "https://hcimaker.github.io",
    },
];

const masterStudents = [
    {
        name: "Shufeng Yin",
        img: defaultImg,
        major: "Master Student (ECE)",
    },
    {
        name: "Zhiyu Jia",
        img: defaultImg,
        major: "Master Student (ECE)",
    },
];

const undergrads = [
    {
        name: "Qianhui Zheng",
        img: defaultImg,
        major: "Undergraduate Student (CS)",
    },
    {
        name: "Lingxiao Yang",
        img: defaultImg,
        major: "Undergraduate Student (CE)",
    },
    {
        name: "William Shen",
        img: defaultImg,
        major: "Undergraduate Student (CE)",
    },
    {
        name: "Alan Murillo-soto",
        img: defaultImg,
        major: "Visiting Student",
    },
    {
        name: "Felix Lu",
        img: defaultImg,
        major: "Undergraduate Student",
    },
];

function PersonCard({ person }) {
    return (
        <Col xs={6} sm={4} md={3} lg={3} className="mb-1">
            <Card className="person-card h-100 text-center border-0">
                <Card.Img
                    variant="top"
                    src={person.img}
                    alt={person.name}
                    style={{
                        height: "120px",
                        width: "120px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        margin: "1rem auto 0 auto",
                    }}
                />

                <Card.Body>
                    {person.website ? (
                        <Card.Title as="h6">
                        <a
                            href={person.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#00bcd4" }}
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
            <h2 className="mb-2 custom-heading">Principal Investigator</h2>
            <Card className="mb-1 px-2 py-3 border-0 flex-row align-items-center faculty-card">
                <Row className="g-3 w-100">
                    <Col xs={12} md={3}>
                    <Card.Img
                        src={faculty.img}
                        alt={faculty.name}
                        className="img-fluid rounded"
                        style={{
                        borderRadius: "0.75rem",
                        objectFit: "cover",
                        width: "100%",
                        }}
                    />
                    </Col>
                    <Col xs={12} md={9}>
                        <Card.Body>
                            <Card.Title as="h5">
                            <a
                                href={faculty.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                fontSize: "1rem",
                                fontWeight: "600",
                                color: "#00bcd4",
                                }}
                            >
                                {faculty.name}
                            </a>
                            </Card.Title>
                            <Card.Text
                            style={{
                                marginTop: "0.5rem",
                                fontSize: "0.75rem",
                                color: "#444",
                                lineHeight: "1.5",
                            }}
                            >
                            {faculty.bio}
                            {/* Social Media */}
                            <div className="social-icons mt-3">
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
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            {/* Students */}
            <h3 className="mt-1 mb-2 custom-heading">Members</h3>
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
