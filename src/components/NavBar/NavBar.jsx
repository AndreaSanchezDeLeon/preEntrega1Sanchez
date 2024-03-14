import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => { 
    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">Robin Design</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Decoracion</Nav.Link>
            <Nav.Link href="#features">Sofás y Sillones </Nav.Link>
            <Nav.Link href="#pricing">Descuentos</Nav.Link>
            </Nav>
        <CartWidget/>
        </Container>
            </Navbar>

    );
};

export default NavBar