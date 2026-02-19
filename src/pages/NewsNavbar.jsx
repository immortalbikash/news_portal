import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewsNavbar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="#home"><Link className='text-white' to="/">News</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link className='text-white' to='/business'>Business</Link></Nav.Link>
                        <Nav.Link href="#pricing"><Link className='text-white' to='/sports'> Sports </Link></Nav.Link>
                        <Nav.Link href="#pricing">Entertainment</Nav.Link>
                        <Nav.Link href="#pricing">General</Nav.Link>
                        <Nav.Link href="#pricing">Health</Nav.Link>
                        <Nav.Link href="#pricing">Science</Nav.Link>
                        <Nav.Link href="#pricing">Wonders</Nav.Link>
                    </Nav>
                </Container>
            </Navbar >
            <br />
        </>
    )
}

export default NewsNavbar