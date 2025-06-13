import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import visionImg from "../../../assets/vision2.png";
import "./Home.css"

const news = [
    {
        time: "[04/2025]",
        description: "UMich ECE welcomes Prof. Junyi Zhu, PI of the SIX Lab, in a featured Q&A article.",
        link: "https://ece.engin.umich.edu/stories/qa-with-new-faculty-member-junyi-zhu"
    },
    {
        time: "[02/2025]",
        description: "We are actively recruiting undergraduate and graduate researchers (PhD & Postdoc)!",
        link: "/join"
    },
    {
        time: "[02/2025]",
        description: "The Sensing Intelligence and eXperience Lab at UMich is established!",
        link: "",
    },
]

export default function Home(props) {
    return (
        <Container>
            {/* Intro */}
            {/* News */}
            <h2 className="custom-heading mb-4">News</h2>
            <ul className="custom-ul mb-4">
                {news.map((item, idx) => (
                    <li key={idx} className="mb-1">
                        {item.time} {item.description || "(Details coming soon)"}
                        {item.link && (
                        <>
                            {" "}
                            [
                            {item.link.startsWith("http") ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">details</a>
                            ) : (
                            <Link to={item.link}>details</Link>
                            )}
                            ]
                        </>
                        )}
                    </li>
                ))}
            </ul>
            {/* Research */}
            <h2 className="custom-heading mb-4">Research</h2>
            <Card className="mb-0 p-1 border-0 custom-card">
                <Row className="g-3 align-items-center">
                    {/* Left: Image */}
                    <Col xs={12} md={6}>
                    <img
                        src={visionImg}
                        alt="Research vision"
                        className="img-fluid rounded w-100"
                        style={{
                        objectFit: "cover",
                        height: "100%",
                        maxHeight: "240px",
                        }}
                    />
                    </Col>

                    {/* Right: Text */}
                    <Col xs={12} md={6}>
                    <div className="h-80 d-flex flex-column justify-content-center">
                        <p style={{ fontSize: "0.75rem", color: "#222", lineHeight: "1.6", margin: 0 }}>
                        Our research lies at the intersection of novel sensing technologies, fabrication, and human-computer interaction, with an emphasis on health and medical applications. Our work spans three areas:
                        </p>
                        <ol style={{ fontSize: "0.75rem", color: "#222", paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
                        <li>
                        Creating specialized, portable health sensing devices for richer biometric data collection in both field and clinical environments;
                        </li>
                        <li>
                        Building personalized signal processing models tailored to individual health conditions;  
                        </li>
                        <li>
                        Designing custom form factors and measurement setups to ensure comfortable and accurate use.
                        </li>
                        </ol>
                    </div>
                    </Col>
                </Row>
            </Card>

            <Row className="g-3 mt-1">
                <Col xs={12} sm={6}>
                    <Card className="h-100 shadow-sm border-0 small-card">
                    <Card.Body className="text-center p-3">
                        <p className="mb-2">Meet our team of researchers, students, and collaborators.</p>
                        <a href="/people" className="stretched-link text-decoration-none">Learn More</a>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6}>
                    <Card className="h-100 shadow-sm border-0 small-card">
                    <Card.Body className="text-center p-3">
                        <p className="mb-2">Read our research papers and latest publications.</p>
                        <a href="/publications" className="stretched-link text-decoration-none">Learn More</a>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}