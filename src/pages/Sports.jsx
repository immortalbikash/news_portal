import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-bootstrap'
import NewsNavbar from './NewsNavbar'
import axios from 'axios';
import NewsCard from './NewsCard';
import Pagination from './Pagination';

const Sports = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);

    const lastPageIndex = currentPage * postPerPage;
    const firstPageIndex = lastPageIndex - postPerPage;

    const currentPost = news.slice(firstPageIndex, lastPageIndex);

    const fetchNews = async () => {
        try {
            const response = await axios.get("https://newsapi.org/v2/everything?q=sports&apiKey=8d5acf2ce2e442519e8bfb99c6c9a016");
            setNews(response.data.articles);
            setIsLoading(false);
            console.log(response.data.articles);
        }
        catch (error) {

        }
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <>
            <NewsNavbar />

            {
                isLoading ? <>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </> : <>
                    <div className='container-card'>
                        {
                            currentPost.map((el) => (
                                <NewsCard data={el} />
                            ))
                        }
                    </div>
                </>
            }

            <Pagination totalPosts={news.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} />
        </>
    )
}

export default Sports