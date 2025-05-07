
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function DeleteConfirmationModal({ show, onHide, product, onConfirm }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete the following product?</p>
                <p><strong>{product.title}</strong></p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function DeleteProductWithConfirmation() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                alert(`Failed to fetch product details: ${err.message}`);
                navigate(`/products/${id}`);
            }
        };
        fetchProduct();
    }, [id, navigate]);

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);
            if (response.status !== 200) {
                throw new Error("Failed to delete product");
            }
            alert("Product deleted successfully. Redirecting to Products...");
            navigate("/products");

        } catch (err) {
            alert(err.message);
        }
    };

    const handleCancel = () => {
        setShowModal(false);
        navigate(`/products/${id}/details`);
    };

    return (
        <>
            {product && (
                <DeleteConfirmationModal
                    show={showModal}
                    onHide={handleCancel}
                    product={product}
                    onConfirm={handleDelete}
                />
            )}
        </>
    );
}

export default DeleteProductWithConfirmation;
