import React from 'react';
import './Home.css';
import Products from '../Products/Products';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <Products />
        </div>
    );
};

export default Home;