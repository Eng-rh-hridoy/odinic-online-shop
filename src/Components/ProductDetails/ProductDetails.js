import React from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import fakeData from '../../fakeData';

const ProductDetails = () => {
    const {productKey} = useParams();
    console.log(productKey);

    useEffect(()=>{
        const Item = fakeData.find(item => item.key === productKey);
        
        console.log(Item.name);
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;