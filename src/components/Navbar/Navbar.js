import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css'

export default function Navs() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">DORSIN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Services</Nav.Link>
                    <Nav.Link href="#link">Features</Nav.Link>
                    <Nav.Link href="#link">Pricing</Nav.Link>
                    <Nav.Link href="#link">Team</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
