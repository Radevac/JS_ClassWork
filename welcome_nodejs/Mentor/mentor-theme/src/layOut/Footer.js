
import { Container, Row, Col } from 'react-bootstrap';

function FooterComponent() {
    const footerText = "© 2024 Mentor Education. All rights reserved. By Radevac";

    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col>
                        <p className="text-center">{footerText}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent;
