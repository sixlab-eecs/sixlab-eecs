import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import JunyiImg from "../../../assets/Junyi.png";
import defaultImg from "../../../assets/NA.svg";
import "./People.css"; // 引入样式文件

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
        <Container className="mt-5">
            {/* Faculty Section */}
            <h2 className="mb-2 custom-heading">Principal Investigator</h2>
            <Row className="align-items-center mb-5">
                <Col xs={12} md={3}>
                    <img
                    src={faculty.img}
                    alt={faculty.name}
                    style={{
                        width: "100%",
                        borderRadius: "0.8rem",
                        border: "1px solid #eee",
                    }}
                    />
                </Col>
                <Col xs={12} md={9}>
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
                    <p style={{ marginTop: "0.75rem", fontSize: "0.8rem", color: "#444" }}>
                        {faculty.bio}
                    </p>
                </Col>
            </Row>

            {/* Students */}
            <h3 className="mt-5 mb-3 custom-heading">Members</h3>
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
