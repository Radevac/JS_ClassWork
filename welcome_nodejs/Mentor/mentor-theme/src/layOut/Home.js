import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <section id="home" className="my-5">
            <Container>
                <Row>
                    <Col>
                        <h2>Welcome to Mentor</h2>
                        <p>This is the home page of Mentor, where we help students achieve their educational goals.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;
