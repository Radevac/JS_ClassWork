import { Container, Row, Col } from 'react-bootstrap';

function AboutComponent() {
    const aboutTitle = "About Mentor";
    const aboutText = "Mentor is an educational platform that helps students achieve their goals by providing high-quality content and resources. We offer various courses and training programs designed to meet the needs of modern learners.";
    const imageSrc = "https://via.placeholder.com/400";

    return (
        <section id="about" className="my-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>{aboutTitle}</h2>
                        <p>{aboutText}</p>
                    </Col>
                    <Col md={6}>
                        <img src={imageSrc} alt="About Mentor" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutComponent;
