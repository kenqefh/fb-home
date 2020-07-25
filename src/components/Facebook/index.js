import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Aside from './Aside'
import Footer from './Footer'
import './style.css'

const Facebook = _ => (
    <div className='container-page'>
        <Header />
        <Nav />
        <Main />
        <Aside />
        <Footer />
    </div>
)
export default Facebook;