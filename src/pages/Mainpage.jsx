import React, { useEffect, useState } from 'react'
import Search from './Search'
import NewsNavbar from './NewsNavbar'
import { Button, Card, Row } from 'react-bootstrap'
import axios from 'axios'
import NewsCard from './NewsCard'

const Mainpage = () => {

    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        try {
            const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=8d5acf2ce2e442519e8bfb99c6c9a016");
            setNews(response.data.articles);
            console.log(response.data.articles);

        }
        catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <>
            <Search />
            <NewsNavbar />

            <Row>

                {
                    news.map((el => (
                        <NewsCard data={el} />
                    )))
                }
            </Row>
        </>
    )
}

export default Mainpage