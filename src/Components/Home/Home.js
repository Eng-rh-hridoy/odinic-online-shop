import React, { useState } from 'react';
import './Home.css';
import Products from '../Products/Products';
import Header from '../Header/Header';
import { useEffect } from 'react/cjs/react.development';
import fakeData from '../../fakeData';

const Home = () => {
    const [store, setStore] = useState([]);
    // Fetch data 
    useEffect(()=>{
        const products = fakeData;
        setStore(products);
    }, []);
    return (
        <div className="home-container">
            <Header />
            {
                store.map(product => <Products product = {product} key={product.key}></Products>)
            }
        </div>
    );
};

export default Home;