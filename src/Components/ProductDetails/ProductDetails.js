import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(item => item.key === productKey);

    return (
        <div>
            <Header />
            <Products showDetails={true} product = {product} key={product.key} />
        </div>
    );
};

export default ProductDetails;