import React from 'react'
import NewsNavbar from './NewsNavbar'
import { useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import noImage from "../assets/Image_not_available.png";

const SingleNews = () => {
    const location = useLocation();
    const { title, description, date, image, content } = location.state || {};
    return (
        <>
            <NewsNavbar />
            <Container className='single-news'>
                <h3>{title}</h3>
                <p>{date}</p>
                <img src={image || noImage} alt="" />
                <p>{content}</p>
            </Container>
        </>
    )
}

export default SingleNews