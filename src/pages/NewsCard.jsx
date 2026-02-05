import React from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap'
import { Link, Route, useNavigate } from 'react-router-dom'
import noImage from "../assets/Image_not_available.png";

const NewsCard = (props) => {
    // const history = useHistory();
    const navigate = useNavigate();

    const readNews = () => {
        navigate("/singlenews", {
            state: {
                title: props.data.title,
                date: props.data.publishedAt,
                description: props.data.description,
                image: props.data.urlToImage,
                content: props.data.content
            }
        });
    }
    return (
        <>
            <Col className='mt-2 mb-5'>
                <Card className='h-100 w-100'>
                    <Card.Img variant="top" src={props.data.urlToImage || noImage} />
                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Text>
                            {props.data.description}
                        </Card.Text>
                        <Button onClick={readNews} variant="dark">Read More</Button>
                    </Card.Body>
                </Card>
            </Col >
        </>
    )
}

export default NewsCard