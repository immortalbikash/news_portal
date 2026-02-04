import React from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap'

const NewsCard = (props) => {
    return (
        <Col className='mt-2'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={props.data.urlToImage} />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>
                        {props.data.description}
                    </Card.Text>
                    <Button variant="primary">Read This News</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default NewsCard