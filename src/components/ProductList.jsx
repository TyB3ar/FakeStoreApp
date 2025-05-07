import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(`Failed to fetch products: ${error.message}`);
                setLoading(false);
            });
    }, []);

    if(loading) return <p className="text-center mt-5">Loading products...</p>;
    if(error) return <p>{error}</p>; 

    return (
        <Container className="text-center mt-5 p-2">
            <h1 className="text-center mb-4">Products</h1> 
            <Row xs={1} md={2} lg={3} className="g-5">
                {products.map(product => (
                    <Col key={product.id}>
                        <Card className="h-100 border-1 shadow-sm">
                            <Card.Img className="p-3" variant="top" src={product.image} alt={product.title} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    Price: ${product.price}
                                </Card.Text>
                                <Link to={`/products/${product.id}/details`} className="btn btn-primary">View Details</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container> 
    );
}

export default ProductList; 
