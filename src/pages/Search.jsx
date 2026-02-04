import React from 'react'
import { Container, Form } from 'react-bootstrap'

const Search = () => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Search News..." />
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Search