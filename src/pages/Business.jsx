import React, { useEffect, useState } from 'react'
import NewsNavbar from './NewsNavbar'
import axios from 'axios';
import NewsCard from './NewsCard';
import Pagination from './Pagination';

const Business = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);

    const lastPageIndex = currentPage * postPerPage;
    const firstPageIndex = lastPageIndex - postPerPage;

    const currentPost = news.slice(firstPageIndex, lastPageIndex);

    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=business&apiKey=${import.meta.env.VITE_API_KEY}`);
            setNews(response.data.articles);
            setIsLoading(false);
            console.log(response.data.articles);
        }
        catch (error) {
            alert(error);
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
                    </div >
                </>
            }

            <Pagination totalPosts={news.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} />
        </>
    )
}

export default Business