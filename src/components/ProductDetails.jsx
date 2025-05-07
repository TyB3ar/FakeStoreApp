
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);


    if (loading) {
        return <p className="text-center mt-5">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-danger mt-5">Error: {error}</p>;
    }

    if (!product) {
        return <p className="text-center mt-5">No product found</p>;
        }

    return (
        <Container className="text-center mt-5 p-2">
            <Card>
                <Card.Img variant="top" className="p-5" src={product.image} alt={product.title} />
                <Card.Body className="text-center">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
                    <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                    <Button className="btn btn-primary m-2" onClick={() => alert("Added to cart!")}>Add to Cart</Button>
                    <Link to={`/products/${id}/delete`} className="btn btn-danger m-2">Delete Product</Link>
                    <Link to={`/products/${id}/edit`}className="btn btn-warning m-2">Edit Product</Link>
                    <Link to="/products" className="btn btn-secondary m-2">Back to Products</Link>
                </Card.Body> 
            </Card>
        </Container>
    );

}

export default ProductDetails;
