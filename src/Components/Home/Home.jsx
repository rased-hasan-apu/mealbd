import React from 'react';
import Header from '../Share/Header/Header';
import Newmeal from '../Newmeal/Newmeal';
import Canada from '../Canada/Canada';
import Amirican from '../Amirican/Amirican';
import Navigation from '../Share/Header/Navigation/Navigation';
import Catagories from '../Catagories/Catagories'
import Catagori from '../Catagori/Catagori';
import ScrollToTop from 'react-scroll-to-top';





const Home = () => {
    return (
            <>
            <ScrollToTop smooth color="#6f00ff" />
            <Navigation/>
            <Header/>
            <Newmeal/>
            <Canada/>
            <Amirican/>
            <Catagories/>
            <Catagori/>
            </>
    );
};

export default Home;