import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Pages/Shared/Footer/Footer';
import Header from '../Components/Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;