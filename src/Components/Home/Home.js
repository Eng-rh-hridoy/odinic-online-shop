import React, { useState } from 'react';
import './Home.css';
import Products from '../Products/Products';
import Header from '../Header/Header';
import { useEffect } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/fakedb';

const Home = () => {
    const [store, setStore] = useState([]);
    const [cart, setCart] = useState([]);
    // Fetch data 
    useEffect(() => {
        const products = fakeData;
        setStore(products);
    }, []);

    // Handle Add To Cart
    const HandleAddToCart = (product) =>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(item => item.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const othersProduct = cart.filter(item => item.key !== toBeAddedKey);
            newCart = [...othersProduct, sameProduct];
        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="home-container">
            <Header />
            <div className="content-wrapper">
                <div className="product-wrapper">
                    {
                        store.map(product => <Products HandleAddToCart={HandleAddToCart} showDetails={false} product={product} key={product.key}></Products>)
                    }
                </div>
                <Cart item={cart} />
            </div>
        </div>
    );
};

export default Home;