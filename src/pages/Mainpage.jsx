import React, { useEffect, useState } from 'react'
import Search from './Search'
import NewsNavbar from './NewsNavbar'
import { Button, Card, Row } from 'react-bootstrap'
import axios from 'axios'
import Pagination from './Pagination'
import NewsCard from './NewsCard'

const Mainpage = () => {

    const [news, setNews] = useState([]);

    const [isLoading, setIsLoading] = useState(true);


    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);

    const lastPageIndex = currentPage * postPerPage;
    const firstPageIndex = lastPageIndex - postPerPage;

    const currentPost = news.slice(firstPageIndex, lastPageIndex);



    const fetchNews = async () => {
        try {
            const myApi = import.meta.env.VITE_API_KEY;
            const country = "us";
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${import.meta.env.VITE_API_KEY}`);
            setNews(response.data.articles);
            setIsLoading(false);
            console.log(response.data.articles.length);

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
            {/* <Search /> */}
            <NewsNavbar />

            {
                isLoading ? <>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </> :
                    <>
                        {/* <NewsNavbar /> */}


                        {/* <div className='row-cols-1 row-cols-sm-2 row-cols-md-4 g-4'> */}
                        <div className='container-card'>
                            {
                                currentPost.map((el => (
                                    <NewsCard data={el} />
                                )))
                            }
                        </div>
                        <Pagination totalPosts={news.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} />
                    </>
            }
            {/* <NewsNavbar />


            <Row className='row-cols-1 row-cols-sm-2 row-cols-md-4 g-4'>
                {
                    currentPost.map((el => (
                        <NewsCard data={el} />
                    )))
                }
            </Row>
            <Pagination totalPosts={news.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} /> */}
            {/* <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> */}
        </>
    )
}

export default Mainpage