import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = (props) => {
    // console.log(user);
    // console.log(props);
    return (
        <div>
            <Header {...props} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
