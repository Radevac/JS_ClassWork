import { Container, Row, Col, Card } from 'react-bootstrap';

function ServicesComponent() {
    const services = [
        { title: "Online Courses", text: "Learn from our expert instructors online and improve your skills in various fields." },
        { title: "Certifications", text: "Get certified after completing our professional courses and show your expertise to the world." },
        { title: "Live Webinars", text: "Attend live webinars hosted by industry leaders to stay ahead in your career." }
    ];

    return (
        <section id="services" className="my-5">
            <Container>
                <h2 className="text-center mb-4">Our Services</h2>
                <Row>
                    {services.map((service, index) => (
                        <Col md={4} key={index}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>{service.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default ServicesComponent;
