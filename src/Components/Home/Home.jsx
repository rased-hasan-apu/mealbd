import React from 'react';
import Header from '../Share/Header/Header';
import Newmeal from '../Newmeal/Newmeal';
import Canada from '../Canada/Canada';
import Amirican from '../Amirican/Amirican';
import Navigation from '../Share/Header/Navigation/Navigation';
import Catagories from '../Catagories/Catagories'
import Catagori from '../Catagori/Catagori';





const Home = () => {
    return (
            <>
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