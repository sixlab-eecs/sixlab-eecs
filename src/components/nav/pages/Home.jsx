import { Container, Row, Col, Card, Button } from "react-bootstrap";
import visionImg from "../../../assets/vision.png";

export default function Home(props) {
    return <Container>
        <h2 className="custom-heading mb-4">Research</h2>
        <h2 className="custom-heading mb-4">News</h2>
        <ul>
            <li>[09/2025] The Sensing Intelligence and eXperience Lab at UMich is established!</li>
            <li>[09/2025] The Sensing Intelligence and eXperience Lab at UMich is established!</li>
        </ul>
    </Container>
}

// export default function Home() {
//   return (
//     <div className="home-bg text-black d-flex flex-column min-vh-100">
//       {/* Hero Section */}
//       <Container className="text-center py-5 my-4">
//         <h1 className="display-3 fw-bold tech-blue mb-3">
//           SIX Lab
//         </h1>
//         <p className="lead tech-light mb-4 mx-auto" style={{ maxWidth: 700 }}>
//           We pioneer intelligent systems bridging humans and machines through
//           cutting-edge research in Human-Computer Interaction, AI, and Robotics.
//         </p>
//         <Button
//           variant="outline-info"
//           href="/projects"
//           className="btn-lg px-4"
//         >
//           Explore Our Projects
//         </Button>
//       </Container>

//       {/* Main Content */}
//       <Container className="my-5">
//         <Row className="g-4 justify-content-center">
//           {/* Research Card */}
//           <Col md={4} sm={6}>
//             <Card className="h-100 bg-dark tech-card border-0 shadow-lg">
//               <div className="tech-card-image" />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="tech-blue fw-semibold mb-2">
//                   Research
//                 </Card.Title>
//                 <Card.Text className="tech-light flex-grow-1">
//                   Explore our latest projects advancing HCI and robotics
//                   technology.
//                 </Card.Text>
//                 <Button
//                   variant="outline-info"
//                   href="/projects"
//                   className="mt-auto align-self-start"
//                 >
//                   Learn More
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* People Card */}
//           <Col md={4} sm={6}>
//             <Card className="h-100 bg-dark tech-card border-0 shadow-lg">
//               <div className="tech-card-image people" />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="tech-blue fw-semibold mb-2">
//                   People
//                 </Card.Title>
//                 <Card.Text className="tech-light flex-grow-1">
//                   Meet our team of researchers, students, and collaborators.
//                 </Card.Text>
//                 <Button
//                   variant="outline-info"
//                   href="/people"
//                   className="mt-auto align-self-start"
//                 >
//                   Learn More
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* Publications Card */}
//           <Col md={4} sm={6}>
//             <Card className="h-100 bg-dark tech-card border-0 shadow-lg">
//               <div className="tech-card-image publications" />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="tech-blue fw-semibold mb-2">
//                   Publications
//                 </Card.Title>
//                 <Card.Text className="tech-light flex-grow-1">
//                   Read our research papers and latest publications.
//                 </Card.Text>
//                 <Button
//                   variant="outline-info"
//                   href="/publications"
//                   className="mt-auto align-self-start"
//                 >
//                   Learn More
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
