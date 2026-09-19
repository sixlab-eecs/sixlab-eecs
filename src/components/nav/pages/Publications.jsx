import { Container, Card } from "react-bootstrap";
import { Award } from "lucide-react";
import "./Publications.css";
import publications, { posters } from "../../../data/publication";

function PublicationCard({ pub, compact = false }) {
    return (
        <Card className={`publication-card mb-3 p-3 border-0 ${compact ? "poster-card" : "paper-card"}`}>
            <a href={pub.links.PDF} className="publication-image-link">
                <img
                    src={"/publications/" + pub.thumbnail}
                    alt={pub.title}
                    className="publication-image rounded w-100"
                />
            </a>
            <div className="publication-details">
                <h3 className="pub-title mb-1">
                    <a href={pub.links.PDF}>{pub.title}</a>
                </h3>
                <p className="pub-authors mb-1 text-muted">{pub.authors}</p>
                <p className="pub-venue mb-2">{pub.venue}</p>
                {pub.highlight && (
                    <div className="publication-award mb-2">
                        <Award size={18} aria-hidden="true" />
                        <span>{pub.highlight}</span>
                    </div>
                )}
                <div className="pub-links mt-2">
                    {Object.entries(pub.links).map(([label, url]) => (
                        <a
                            href={url}
                            key={label}
                            className="btn btn-sm btn-outline-secondary me-2 mb-2"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </Card>
    );
}

export default function Publications() {
    return (
        <Container className="mt-4 publications-layout">
            <section aria-labelledby="papers-heading">
                <h2 id="papers-heading" className="custom-heading">Papers</h2>
                {publications.map((pub) => (
                    <PublicationCard key={pub.title} pub={pub} />
                ))}
            </section>
            <section aria-labelledby="posters-heading">
                <h2 id="posters-heading" className="custom-heading">Posters</h2>
                {posters.map((pub) => (
                    <PublicationCard key={pub.title} pub={pub} compact />
                ))}
            </section>
        </Container>
    );
}
