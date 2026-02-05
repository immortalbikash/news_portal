import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainpage from '../pages/Mainpage'
import SingleNews from '../pages/SingleNews'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Mainpage} exact />
                <Route path='/singlenews' Component={SingleNews} exact />
            </Routes>
        </BrowserRouter>
    )
}

export default Router