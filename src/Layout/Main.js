import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Common/Footer/Footer';
import Header from '../Pages/Common/Header/Header';
import Navbar from '../Pages/Common/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;