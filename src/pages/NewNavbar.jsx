import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NewNavbar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">News</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Business</Nav.Link>
                        <Nav.Link href="#pricing">Entertainment</Nav.Link>
                        <Nav.Link href="#pricing">General</Nav.Link>
                        <Nav.Link href="#pricing">Health</Nav.Link>
                        <Nav.Link href="#pricing">Science</Nav.Link>
                        <Nav.Link href="#pricing">Sports</Nav.Link>
                        <Nav.Link href="#pricing">Technology</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    )
}

export default NewNavbar