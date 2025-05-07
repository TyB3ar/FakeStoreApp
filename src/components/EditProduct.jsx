import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
        category: ""
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError(null);

        try{
            const response = await axios.put(`https://fakestoreapi.com/products/${id}`, product, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            setMessage("Product updated successfully! Returning to Products...");
            setProduct({ title: "", price: "", description: "", category: "" });
            setTimeout(() => {
                window.location.href = `/products`;
            }, 2000); // Redirect after 2 seconds
        } catch (err) {
            setError(err.response?.data?.message || "Failed to update product");
        }
    }

    if (error) {
        return <p className="text-center text-danger mt-5">Error: {error}</p>;
    }

    if (!product) {
        return <p className="text-center mt-5">No product found</p>;
    }

    // Fetch product details to show in placeholder what current values are 
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct({
                    title: response.data.title,
                    price: response.data.price,
                    description: response.data.description,
                    category: response.data.category
                });
            } catch (err) {
                setError("Failed to fetch product details");
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <Container className="text-center mt-5">
            <Row className="justify-content-md-center mb-4">
                <Col md={6}>
                    <h2 className="m-3 p-2">Edit Product</h2>   
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
                        <Button type="submit" className="btn btn-primary">Save Changes</Button>
                    </Form>
                    {message && <p className="text-success mt-3">{message}</p>}
                    {error && <p className="text-danger mt-3">{error}</p>}
                </Col>
            </Row>
        </Container>
    );
}

export default EditProduct;
