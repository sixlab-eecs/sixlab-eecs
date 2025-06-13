import { Container, Row, Col, Card } from "react-bootstrap";
import "./JoinUs.css";

export default function JoinUs(props) {
    return (
        <Container className="join-us-container mt-4">
            {/* Contact Us */}
            <h2 className="custom-heading mb-4">Contact Us</h2>
            <Card className="border-0 mb-4">
                <Row className="g-0">
                    {/* Map */}
                    <Col md={6}>
                        <div style={{ width: "100%", height: "100%" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1475.6754090712177!2d-83.71634671716444!3d42.2923792363416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae8432144dd9%3A0x5c5d4cf6c90624dd!2sGGBL%20Building!5e0!3m2!1sen!2sus!4v1749751438834!5m2!1sen!2sus"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "250px",
                                border: 0,
                                borderRadius: "0.375rem 0.375rem 0.375rem 0.375rem"
                            }}
                            title="Google Map"
                        ></iframe>
                        </div>
                    </Col>
                    {/* Info */}
                    <Col md={6} className="d-flex flex-column justify-content-center p-4">
                        <p className="mb-3">
                            The Sensing, Intelligence and eXperience (SIX) Lab operates under the Department of {" "}
                            <a href="https://eecs.engin.umich.edu" target="_blank" rel="noopener noreferrer">
                            Electrical Engineering and Computer Science
                            </a>{" "}
                            at the University of Michigan.
                        </p>
                        <p className="mb-2">
                            <strong>Lab Location:</strong> 
                            <br/>
                            G.G.Brown Building 3331 
                            <br/>
                            2350 Hayward St, Ann Arbor, MI 48109
                        </p>
                        <p className="mb-2">
                            <strong>Office:</strong>
                            <br/>
                            EECS Building 3217 
                            <br/>
                            1301 Beal Ave, Ann Arbor, MI 48109
                        </p>
                        <p className="mb-0">
                            <strong>Email:</strong><br/>
                            <a href="mailto:junyi@umich.edu">junyi@umich.edu</a>
                        </p>
                    </Col>
                </Row>
            </Card>

            {/* What we look for */}
            <h2 className="custom-heading mb-4">What we look for</h2>
            <p className="mb-4">
                We are always looking for motivated students who are excited about exploring interdisciplinary ideas at the intersection of sensing, intelligence, and experience. We particularly welcome individuals who are intellectually curious, open to learning from setbacks, and enthusiastic about collaborative research in a supportive environment.
            </p>
            {/* Mentorship and Opportunities */}
            <h2 className="custom-heading mb-4">Mentorship and Opportunities</h2>
            <p className="mb-4">
                Mentorship in our lab is customized to each student’s background and goals. Whether you’re an undergraduate beginning your research journey or a PhD student developing your own path, we strive to align your interests with meaningful projects while providing thoughtful guidance. We usually start with weekly one-on-one meetings and gradually adjust the mentoring style to support your growing independence. We are committed to fostering excitement, mutual respect, and a spirit of shared discovery in every mentoring relationship.
            </p>
            {/* How to join */}
            <h2 className="custom-heading mb-4">How to join</h2>
            <p className="mb-4">
                We welcome inquiries from prospective undergraduate researchers, PhD students, and postdoctoral fellows. If you're interested in joining the lab, please feel free to{" "}
                <strong><a href="mailto:junyi@umich.edu">contact us by email</a></strong>. We'd love to hear from you!
            </p>
        </Container>
    );
}
