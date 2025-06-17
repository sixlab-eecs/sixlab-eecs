import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import visionImg from "../../../assets/vision2.png";
import { Users, BookOpen } from "lucide-react";
import img1 from "../../../assets/pub12.png"
import img2 from "../../../assets/pub6.png"
import img3 from "../../../assets/pub8.png"
import img4 from "../../../assets/pub10.png"
import "./Home.css"

const carouselImages = [
    { src: img2, alt: 'Lab Group' },
    { src: img1, alt: 'Project demo' },
    { src: img3, alt: 'Lab Meeting' },
];  

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

// Carousel Images
export function HomeBanner() {
    return (
        <Carousel fade interval={4000} className="home-carousel mt-4 mb-4 rounded shadow-sm overflow-hidden">
            {carouselImages.map((img, idx) => (
            <Carousel.Item key={idx}>
                <img
                className="d-block w-100"
                src={img.src}
                alt={img.alt}
                />
                {/*<Carousel.Caption>
                <h5>{img.alt}</h5>
                </Carousel.Caption>*/}
            </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default function Home(props) {
    return (
        <Container>
            {/* Intro */}
            <h2 className="custom-heading mb-4 mt-4">Sensing Intelligence and eXperience Lab</h2>
            {/*<h2 className="home-heading mb-4">The SIX Lab creates intelligent sensing technologies and interactive systems to advance health, human experience, and personalized computing.</h2>*/}
            <Container fluid className="px-0 mb-4">
                <HomeBanner />
                <div className="h-80 d-flex flex-column justify-content-center">
                    <p style={{ fontSize: "0.75rem", color: "#222", lineHeight: "1.6", margin: 0 }}>
                    The Sensing, Intelligence and eXperience (SIX) Lab develops innovative sensing technologies, personalized signal processing models, and custom device form factors to enable continuous health monitoring and advanced human-computer interaction. Our interdisciplinary team bridges hardware and software innovations in novel sensing, fabrication, and interaction design, collaborating closely with UMich faculty in engineering and medicine. We aim to improve healthcare accessibility and empower individuals through scalable, real-world deployed technologies that foster impactful, cross-disciplinary advances.
                    </p>
                </div>
            </Container>
            {/* News */}
            <h2 className="custom-heading mb-4 mt-4">News</h2>
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
                        <Users size={18} className="icon mb-2 text-info"/>
                        <p className="mb-2">Meet our team of researchers and collaborators.</p>
                        <a href="/people" className="stretched-link text-decoration-none">Learn More</a>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6}>
                    <Card className="h-100 shadow-sm border-0 small-card">
                    <Card.Body className="text-center p-3">
                        <BookOpen size={18} className="icon mb-2 text-info" />
                        <p className="mb-2">Read our research papers and latest publications.</p>
                        <a href="/publications" className="stretched-link text-decoration-none">Learn More</a>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}