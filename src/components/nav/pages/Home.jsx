import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import visionImg from "../../../assets/vision2.png";
import { Users, BookOpen } from "lucide-react";
import group_photo from "../../../assets/Group_photo.jpg";
import React, { useState, useEffect } from "react";
import news from "../../../data/new";


import "./Home.css"

const carouselImages = [
    // { src: group_photo, alt: 'Group photo' },
    { src: "publications/icra24_liquids_ident.png", alt: 'Project demo' },
    { src: "publications/uist22_musclerehab.png", alt: 'Project demo' },
    { src: "publications/uist25_band_ei.avif", alt: 'Project demo' },
];  

// Carousel Images
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
export function HomeBanner() {
    const isMobile = useIsMobile();
    return (<>
      {isMobile ? (
        <Carousel fade interval={4000} className="home-carousel mt-4 mb-4 rounded shadow-sm overflow-hidden">
          {carouselImages.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img className="d-block w-100" src={img.src} alt={img.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div className="grid">
          {carouselImages.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} className="img" />
          ))}
        </div>
      )}
    </>

    );
}
export default function Home(props) {
    return (
        <Container>
            {/* Intro */}
            {/* <h2 className="custom-heading mb-4 mt-4">Sensing Intelligence and eXperience Lab</h2> */}
            {/*<h2 className="home-heading mb-4">The SIX Lab creates intelligent sensing technologies and interactive systems to advance health, human experience, and personalized computing.</h2>*/}
            <Container fluid className="px-0 mb-4">
                <HomeBanner />
                <div className="h-80 d-flex flex-column justify-content-center">
                    <p style={{ fontSize: "17px", color: "#222", lineHeight: "1.6", margin: 0 }}>
                    The Sensing, Intelligence and eXperience (SIX) Lab is part of {" "}
                    <a className="custome-a" href="https://eecs.engin.umich.edu" target="_blank" rel="noopener noreferrer">
                        Electrical Engineering and Computer Science
                    </a>{" "} 
                    department at the{" "} 
                    <a className="custome-a" href="https://umich.edu" target="_blank" rel="noopener noreferrer">
                        University of Michigan
                    </a>
                    .
                    We advance  <strong>novel sensing</strong>, <strong>fabrication</strong>, and <strong>interaction design</strong> by bridging hardware and software innovations. 
                    We develop innovative sensing technologies, personalized signal processing models, and custom device form factors to enable continuous health monitoring and advanced human-computer interaction.
                    {/* We aim to improve healthcare accessibility and empower individuals through scalable, real-world technologies. */}
                    {/* . We develop innovative sensing technologies, personalized signal processing models, and custom device form factors to enable continuous health monitoring and advanced human-computer interaction. 
                    Our interdisciplinary team bridges hardware and software innovations in novel sensing, fabrication, and interaction design, collaborating closely with UMich faculty in engineering and medicine. 
                    We aim to improve healthcare accessibility and empower individuals through scalable, real-world deployed technologies that foster impactful, cross-disciplinary advances. */}
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
            <Row className="g-3 mt-1 mb-5">
                <Col xs={12} sm={6}>
                    <Card className="h-100 shadow-sm border-0 small-card">
                    <Card.Body className="text-center p-3">
                        <Users size={25} className="mb-2 icon-primary"/>
                        <p className="mb-2">Meet our team of researchers and collaborators.</p>
                        <a href="/people" className="stretched-link text-decoration-none">Learn More</a>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6}>
                    <Card className="h-100 shadow-sm border-0 small-card">
                    <Card.Body className="text-center p-3">
                        <BookOpen size={25} className="mb-2 icon-primary" />
                        <p className="mb-2">Read our research papers and latest publications.</p>
                        <a href="/publications" className="stretched-link text-decoration-none">Learn More</a>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}