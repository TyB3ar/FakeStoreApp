import { useState, useEffect } from "react";
import axios from "axios"; 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";  
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddProduct() {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
        category: ""
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const response = await axios.post("https://fakestoreapi.com/products", product, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            setMessage("Product created successfully! Returning to Products...");
            setProduct({ title: "", price: "", description: "", category: "" });
            setTimeout(() => {
                window.location.href = `/products`;
            }, 2000); // Redirect after 2 seconds
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create product");
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="m-3 p-2 text-center">Add New Product</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Product Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={product.title}
                                onChange={handleChange}
                                placeholder="Enter product title"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                placeholder="Enter product price"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                placeholder="Enter product description"
                                rows={3}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                                placeholder="Enter product category"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {message && <p className="text-success mt-3">{message}</p>}
                    {error && <p className="text-danger mt-3">{error}</p>}
                </Col>
            </Row>
        </Container>
    );
}

export default AddProduct; 
