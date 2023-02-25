
import { Route, Routes } from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import Header from '../pages/header';
import Home from '../pages/home';
import Project from '../pages/project';
import Footer from '../pages/footer';
import useLoader from '../hooks/useLoader';
import Loader from '../loader';
import React, { memo, useEffect, useState } from 'react';

import 'aos/dist/aos.css'
import Aos from 'aos';

export const myContext = React.createContext('')
function RouterApp(){
    useEffect(()=>{
        Aos.init({duration:1500})
    },[])
    const [scrolling,setScrolling] = useState(0)
    window.onscroll = ()=> {
        setScrolling(Math.floor(window.scrollY))
    }
    const {loading} = useLoader()
    if(loading){
        return <Loader/>
    }
    return (
        <>
        <myContext.Provider value={{
            scrolling,
        }}>
            <Header/>
            <Routes>
                <Route path='/portfolio' index element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Project/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>  
            <Footer/>
        </myContext.Provider>
        </>
    )
}

export default memo(RouterApp);