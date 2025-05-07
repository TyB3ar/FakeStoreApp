
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar p-2">
            <Navbar.Brand href="/">
                <img src="https://fake-store-api-docs.vercel.app/_astro/logo.2e155839.png" alt="FakeStore" className='nav-logo p-3'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="p-3 mt-2 fs-4 text-center justify-content-end">
                <Nav>
                    <Nav.Link as={NavLink} to="/" activeclassname="active">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/products" activeclassname="active">
                        Products
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/new-product" activeclassname="active">
                        Add Product
                    </Nav.Link> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
