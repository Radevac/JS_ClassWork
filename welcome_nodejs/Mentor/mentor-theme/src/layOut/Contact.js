import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactComponent() {
    const officeInfo = {
        address: "1234 Education Street, Knowledge City",
        email: "info@mentor.com",
        phone: "+123 456 789"
    };

    return (
        <section id="contact" className="my-5">
            <Container>
                <h2 className="text-center mb-4">Contact Us</h2>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Your message" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h4>Our Office</h4>
                        <p>{officeInfo.address}</p>
                        <p>Email: {officeInfo.email}</p>
                        <p>Phone: {officeInfo.phone}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContactComponent;
