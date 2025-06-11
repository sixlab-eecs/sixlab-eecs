import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Publications.css";
import thumb1 from "../../../assets/pub1.png";
import thumb2 from "../../../assets/pub2.png";
import thumb3 from "../../../assets/pub3.png";
import thumb4 from "../../../assets/pub4.png";
import thumb5 from "../../../assets/pub5.png";
import thumb6 from "../../../assets/pub6.png";
import thumb7 from "../../../assets/pub7.png";
import thumb8 from "../../../assets/pub8.png";
import thumb9 from "../../../assets/pub9.png";
import thumb10 from "../../../assets/pub10.png";
import thumb11 from "../../../assets/pub11.png";
import thumb12 from "../../../assets/pub12.png";
import thumb13 from "../../../assets/pub13.png";
import thumb14 from "../../../assets/pub14.png";
import thumb15 from "../../../assets/pub15.png";
import thumb16 from "../../../assets/pub16_2.png";

const publications = [
    {
        title: "WiReSens Toolkit: An Open-source Platform towards Accessible Wireless Tactile Sensing",
        authors: "Devin Murphy, Junyi Zhu, Paul Pu Liang, Wojciech Matusik, and Yiyue Luo.",
        venue: "In arXiv preprint arXiv:2412.00247 (2024)",
        thumbnail: thumb1,
        links: {
            DOI: "https://arxiv.org/abs/2412.00247",
            PDF: "https://arxiv.org/pdf/2412.00247",
        },
    },
    {
        title: "PortaChrome: A Portable Contact Light Source for Integrated Re-Programmable Multi-Color Textures",
        authors: "Yunyi Zhu, Cedric Honnet, Yixiao Kang, Junyi Zhu, Angelina J Zheng, Kyle Heinz, Grace Tang, Luca Musk, Michael Wessely and Stefanie Mueller.",
        venue: "In Proceedings of UIST 2024",
        thumbnail: thumb2,
        links: {
            DOI: "https://dl.acm.org/doi/10.1145/3654777.3676458",
            PDF: "https://groups.csail.mit.edu/hcie/files/research-projects/portachrome/2024-uist-portachrome-paper.pdf",
            Video: "https://www.youtube.com/watch?v=JjfruwqQeo4"
        },
    },
    {
        title: "Liquids Identification and Manipulation via Digitally Fabricated Impedance Sensors",
        authors: "Junyi Zhu*, Young Joong Lee*, Yiyue Luo*, Tianyu Xu, Chao Liu, Daniela Rus, Stefanie Mueller and Wojciech Matusik.",
        venue: "In IEEE ICRA 2024",
        thumbnail: thumb3,
        links: {
            DOI: "https://ieeexplore.ieee.org/document/10610518",
            PDF: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10610518"
        },
    },
    {
        title: "EITPose: Wearable and Practical Electrical Impedance Tomography for Continuous Hand Pose Estimation",
        authors: "Alexander Kyu*, Hongyu Mao*, Junyi Zhu, Mayank Goel and Karan Ahuja.",
        venue: "In Proceedings of CHI 2024",
        thumbnail: thumb4,
        links: {
            DOI: "https://dl.acm.org/doi/10.1145/3613904.3642663",
            PDF: "https://dl.acm.org/doi/pdf/10.1145/3613904.3642663",
            Video: "https://www.youtube.com/watch?v=eS0ToK7g0wY",
            Talk: "https://www.youtube.com/watch?v=n4F9Gftmqtc",
        },
    },
    {
        title: "MagKnitic: Machine-knitted Passive and Interactive Haptic Textiles with Integrated Binary Sensing",
        authors: "Yiyue Luo, Junyi Zhu, Kui Wu, Cedric Honnet, Stefanie Mueller and Wojciech Matusik.",
        venue: "In Proceedings of UIST 2023",
        thumbnail: thumb5,
        links: {
            DOI: "https://dl.acm.org/doi/10.1145/3586183.3606765",
            PDF: "https://dl.acm.org/doi/pdf/10.1145/3586183.3606765",
            Video: "https://www.youtube.com/watch?v=qe95Ix-v8WU",
        },
    },
    {
        title: "FlexBoard: A Flexible Breadboard for Interaction Prototyping on Curved and Deformable Surfaces ",
        authors: "Donghyeon Ko, Yoonji Kim, Junyi Zhu, Michael Wessely and Stefanie Mueller.",
        venue: "In Proceedings of CHI 2023",
        thumbnail: thumb6,
        links: {
        DOI: "https://dl.acm.org/doi/10.1145/3544548.3580748",
        PDF: "https://drive.google.com/file/d/16lhQT0wjHAJmK96oJFLMxbLYM39DJJh9/view",
        Video: "https://www.youtube.com/watch?v=_ZC81B9k-oM",
        Project: "https://hcie.csail.mit.edu/research/flexboard/flexboard.html",
        },
    },
    {
        title: "MechSense: A Design and Fabrication Pipeline for Integrating Rotary Encoders into 3D Printed Mechanisms",
        authors: "Marwa AlAlawi, Noah Pacik-Nelson, Junyi Zhu, Ben Greenspan, Andrew Doan, Brandon M Wong, Benjamin Owen-Block, Shanti Mickens, Wilhelm Schoeman, Michael Wessely, Andreea Danielescu and Stefanie Mueller.",
        venue: "In Proceedings of CHI 2023",
        thumbnail: thumb7,
        links: {
        DOI: "https://dl.acm.org/doi/10.1145/3544548.3581361",
        PDF: "https://drive.google.com/file/d/1l6zgHU7qj5kwIEyuWcizb065JyyCHtxm/view",
        Video: "https://www.youtube.com/watch?v=V3LmRjB-e3s",
        Project: "https://hcie.csail.mit.edu/research/MechSense/MechSense.html",
        },
    },
    {
        title: "MuscleRehab: Improving Unsupervised Physical Rehabilitation by Monitoring and Visualizing Muscle Engagement",
        authors: "Junyi Zhu, Yuxuan Lei, Aashini Shah, Gila R. Schein, Hamid Ghaednia, Joseph H. Schwab, Casper Harteveld and Stefanie Mueller",
        venue: "In Proceedings of UIST 2022",
        thumbnail: thumb8,
        links: {
        DOI: "https://dl.acm.org/doi/10.1145/3526113.3545705",
        PDF: "https://groups.csail.mit.edu/hcie/files/research-projects/musclerehab/2022-UIST-musclerehab-paper.pdf",
        Video: "https://www.youtube.com/watch?v=6Xv6jkll_Ro",
        Project: "https://hcie.csail.mit.edu/research/musclerehab/musclerehab.html",
        },
    },
    {
        title: "SensorViz: Visualizing Sensor Data Across Different Stages of Prototyping Interactive Objects",
        authors: "Yoonji Kim, Junyi Zhu, Mihir Trivedi, Dishita G. Turakhia, Ngai Hang Wu, Donghyeon Ko, Michael Wessely, Stefanie Mueller.",
        venue: "In Proceedings of DIS 2022",
        thumbnail: thumb9,
        links: {
        DOI: "https://dl.acm.org/doi/10.1145/3532106.3533481",
        PDF: "https://hcie.csail.mit.edu/research/sensorviz/pdf/2022-DIS-sensorviz-paper.pdf",
        Video: "https://www.youtube.com/watch?v=masM94EQsEQ",
        Project: "https://hcie.csail.mit.edu/research/sensorviz/sensorviz.html",
        },
    },
    {
        title: "EIT-kit: An Electrical Impedance Tomography Toolkit for Health and Motion Sensing",
        authors: "Junyi Zhu, Jackson C. Snowden, Joshua Verdejo, Emily Chen, Paul Zhang, Hamid Ghaednia, Joseph H. Schwab, Stefanie Mueller.",
        venue: "In Proceedings of UIST 2021",
        thumbnail: thumb10,
        links: {
        DOI: "https://dl.acm.org/doi/10.1145/3472749.3474758",
        PDF: "https://groups.csail.mit.edu/hcie/files/research-projects/eit-kit/2021-UIST-eit-kit-paper.pdf",
        Video: "https://www.youtube.com/watch?v=aPgAYlj82fk",
        Talk: "https://www.youtube.com/watch?v=ILT1Ny4yzik",
        Project: "https://hcie.csail.mit.edu/research/eit-kit/eit-kit.html",
        },
    },
    {
        title: "MorphSensor: A 3D Electronic Design Tool for Reforming Sensor Modules",
        authors: "Junyi Zhu, Yunyi Zhu, Jiaming Cui, Leon Cheng, Jackson C Snowden, Mark Chounlakone, Michael Wessely, Stefanie Mueller.",
        venue: "In Proceedings of UIST 2020",
        thumbnail: thumb11,
        links: {
        DOI: "https://dl.acm.org/doi/10.1145/3379337.3415898",
        PDF: "https://groups.csail.mit.edu/hcie/files/research-projects/morphsensor/2020-UIST-morphsensor-paper.pdf",
        Video: "https://www.youtube.com/watch?v=O97eqZzTQVc",
        Talk: "https://www.youtube.com/watch?v=O97eqZzTQVc",
        Project: "https://hcie.csail.mit.edu/research/morphsensor/morphsensor.html",
        },
    },
    {
        title: "CurveBoards: Integrating Breadboards into Physical Objects to Prototype Function in the Context of Form",
        authors: "Junyi Zhu, Yunyi Zhu, Jiaming Cui, Leon Cheng, Jackson C Snowden, Mark Chounlakone, Michael Wessely, Stefanie Mueller.",
        venue: "In Proceedings of CHI 2020",
        thumbnail: thumb12,
        links: {
        DOI: "https://dl.acm.org/doi/abs/10.1145/3313831.3376617",
        PDF: "https://groups.csail.mit.edu/hcie/files/research-projects/curveboard/2020-CHI-curveboard-paper.pdf",
        Video: "https://www.youtube.com/watch?v=erV9JR0rjGs",
        Project: "https://hcie.csail.mit.edu/research/curveboard/curveboard.html",
        },
    },
    {
        title: "Sequential Support: 3D Printing Dissolvable Support Material for Time-Dependent Mechanisms",
        authors: "Martin Nisser, Junyi Zhu, Tianye Chen, Katarina Bulovic, Parinya Punpongsanon, Stefanie Mueller.",
        venue: "In Proceedings of TEI 2019",
        thumbnail: thumb13,
        links: {
        DOI: "https://dl.acm.org/doi/10.1145/3294109.3295630",
        PDF: "https://groups.csail.mit.edu/hcie/files/research-projects/sequential-support/2019-TEI-SequentialSupport-paper.pdf",
        Video: "https://www.youtube.com/watch?v=T-22KOGFLoQ",
        Project: "https://hcie.csail.mit.edu/research/sequential-support/sequential-support.html",
        },
    },
    {
        title: "Seismo: Blood Pressure Monitoring using Built-in Smartphone Accelerometer and Camera",
        authors: "Edward Wang, Junyi Zhu, Mohit Jain, Tien-Jui Lee, Elliot Saba, Lama Nachman, Shwetak N. Patel.",
        venue: "In Proceedings of CHI 2018",
        thumbnail: thumb14,
        links: {
        DOI: "https://dl.acm.org/doi/10.1145/3173574.3173999",
        PDF: "https://www.junyizhu.com/_files/ugd/1ca822_329abad0d6c642fb8c785b08cbf5fedd.pdf",
        Video: "https://www.youtube.com/watch?v=Xd6hSQYHVCc",
        },
    },
    {
        title: "Noninvasive hemoglobin measurement using unmodified smartphone camera and white flash",
        authors: "Edward Wang, William Li, Junyi Zhu, Rajneil Rana, Shwetak N. Patel.",
        venue: "In Proceedings of 39th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC 2017)",
        thumbnail: thumb15,
        links: {
        DOI: "https://ieeexplore.ieee.org/document/8037323/",
        PDF: "https://www.junyizhu.com/_files/ugd/1ca822_7e2bd3c1f8964d9a8f5fbda4e22f9144.pdf",
        },
    },
    {
        title: "HemaApp IR: noninvasive hemoglobin measurement using unmodified smartphone cameras and built-in LEDs",
        authors: "Edward Wang, Junyi Zhu, William Li, Rajneil Rana, Shwetak N. Patel.",
        venue: "In Proceedings of the 2017 ACM International Joint Conference on Pervasive and Ubiquitous Computing and Proceedings of the 2017 ACM International Symposium on Wearable Computers (UbiComp '17)",
        thumbnail: thumb16,
        links: {
        DOI: "https://dl.acm.org/doi/10.1145/3123024.3123180",
        PDF: "https://www.junyizhu.com/_files/ugd/1ca822_349d8c78d54a469bad418016e54d2a0b.pdf",
        },
    },
];

export default function Publications() {
    return (
        <Container className="mt-4">
        <h2 className="custom-heading mb-2">Publications</h2>
        {publications.map((pub, idx) => (
            <Card className="publication-card mb-1 p-3 d-flex flex-row align-items-stretch border-0">
            <div style={{ 
                    flex: "0 0 200px",           
                    height: "120px",      
                    overflow: "hidden",
                }}>
            <img
                src={pub.thumbnail}
                alt={pub.title}
                className="img-fluid h-100 w-100 object-fit-cover rounded"
                style={{ border: "1px solid #ccc" }}
            />
            </div>
            <div className="ms-4 d-flex flex-column justify-content-between" style={{ flex: 1 }}>
            <div>
                <h5 className="pub-title mb-1">
                    <a
                        href={pub.links.PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {pub.title}
                    </a>
                </h5>
                <p className="pub-authors mb-1 text-muted">{pub.authors}</p>
                <p className="pub-venue mb-2" style={{ fontStyle: "italic" }}>{pub.venue}</p>
            </div>
            <div className="pub-links">
                {Object.entries(pub.links).map(([label, url]) => (
                <a
                    href={url}
                    key={label}
                    className="btn btn-sm btn-outline-secondary me-2 mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {label}
                </a>
                ))}
            </div>
            </div>
        </Card>      
        ))}
        </Container>
    );
}