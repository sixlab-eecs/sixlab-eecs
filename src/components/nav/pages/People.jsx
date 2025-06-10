import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import JunyiImg from "../../../assets/Junyi.png";
import defaultImg from "../../../assets/NA.svg";
import "./People.css"; // 引入样式文件

const faculty = {
  name: "Junyi Zhu",
  website: "https://www.junyizhu.com/",
  img: JunyiImg,
  bio: `Junyi Zhu is an Assistant Professor at University of Michigan, Electrical Engineering and Computer Science (EECS) Department, leading the Sensing, Intelligence and eXperience (SIX) Lab.
With his background in health sensing, fabrication and human-computer interaction, he is uniquely positioned to design and fabricate personal health and medical devices, build signal processing models for individual patients and their specific conditions, and deploy his devices in studies with doctors and patients.`,
};

const phdStudents = [
  {
    name: "Jiale Zhang",
    img: defaultImg,
    major: "Embedded Systems",
    website: "https://hcimaker.github.io",
  },
];

const masterStudents = [
  {
    name: "Shufeng Yin",
    img: defaultImg,
    major: "Electrical and Computer Engineering",
  },
  {
    name: "Zhiyu Jia",
    img: defaultImg,
    major: "N/A",
  },
];

const undergrads = [
  {
    name: "Qianhui Zheng",
    img: defaultImg,
    major: "Computer Science",
  },
  {
    name: "Lingxiao Yang",
    img: defaultImg,
    major: "Computer Engineering",
  },
  {
    name: "William Shen",
    img: defaultImg,
    major: "Computer Engineering",
  },
  {
    name: "Alan Murillo-soto",
    img: defaultImg,
    major: "N/A",
  },
  {
    name: "Felix Lu",
    img: defaultImg,
    major: "N/A",
  },
];

function PersonCard({ person }) {
  return (
    <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
      <Card className="person-card h-100 text-center border-0">
        <Card.Img
          variant="top"
          src={person.img}
          alt={person.name}
          style={{
            height: "150px",
            objectFit: "cover",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
        />
        <Card.Body>
          {person.website ? (
            <Card.Title as="h6">
              <a
                href={person.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00bcd4", textDecoration: "none" }}
              >
                {person.name}
              </a>
            </Card.Title>
          ) : (
            <Card.Title as="h6">{person.name}</Card.Title>
          )}
          {person.major && (
            <Card.Text className="text-muted" style={{ fontSize: "0.85rem" }}>
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
      <h2 className="mb-4 custom-heading">Faculty</h2>
        <Row className="align-items-center mb-4">
            <Col xs={6} md={3}>
            <img
                src={faculty.img}
                alt={faculty.name}
                style={{ width: "100%", borderRadius: "8px" }}
            />
            </Col>
            <Col xs={6} md={9}>
            <a
                href={faculty.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.25rem", fontWeight: "700", color: "#007bff" }}
            >
                {faculty.name}
            </a>
            <p style={{ marginTop: "0.5rem", fontSize: "1rem", color: "#bbbbbb" }}>
                {faculty.bio}
            </p>
            </Col>
        </Row>


      {/* PhD Students */}
      <h3 className="mt-5 mb-3 custom-heading">PhD Students</h3>
      <Row>
        {phdStudents.map((student, idx) => (
          <PersonCard key={idx} person={student} />
        ))}
      </Row>

      {/* Master Students */}
      <h3 className="mt-5 mb-3 custom-heading">Master Students</h3>
      <Row>
        {masterStudents.map((student, idx) => (
          <PersonCard key={idx} person={student} />
        ))}
      </Row>

      {/* Undergraduate Students */}
      <h3 className="mt-5 mb-3 custom-heading">Undergraduate Students</h3>
      <Row>
        {undergrads.map((student, idx) => (
          <PersonCard key={idx} person={student} />
        ))}
      </Row>
    </Container>
  );
}
