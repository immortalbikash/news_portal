import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainpage from '../pages/Mainpage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Mainpage} exact />
            </Routes>
        </BrowserRouter>
    )
}

export default Router