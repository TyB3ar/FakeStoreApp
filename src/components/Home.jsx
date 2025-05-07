
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import './Home.css'; 


function Home() {
    return (
        <Container id='home' className='p-5'>
            <Row>
                <Col className="text-center mt-5 p-3">
                    <h1>Fake Store</h1>
                    <p>Welcome to the Fake Store! Here you can find a variety of products at amazing prices.</p>
                </Col>
            </Row>
            <Row>
                <Col className='col-12 text-center mt-5'>
                    <img src="https://fake-store-api-docs.vercel.app/_astro/logo.2e155839.png" alt="Fake Store Logo" className="home-img" />
                    <Button variant="primary" className="mt-5 col-12 text-light" href="/products">Shop Now</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home; 

