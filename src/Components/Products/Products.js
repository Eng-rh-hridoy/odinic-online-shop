import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = (props) => {
    // console.log(props.product)
    const {name, img, price, seller, stock, key, features} = props.product;
    return (
        <div className="product-container">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-sort-details">
                <p className="title"><strong>Title: </strong><Link to={"/product/"+key}>{name}</Link></p>
                <p>Seller-<small> {seller}</small></p>
                <p>Stock: <small>Only {stock} are left</small></p>
                <h3>Price: ${price}</h3>
                {
                    props.showDetails === true && <div>
                        {
                            features.map(feature=> <li>{feature.description}: {feature.value}</li>)
                        }
                    </div>
                }
                <button onClick={()=>props.HandleAddToCart(props.product)} className="add-cart-btn">Add to cart</button>
            </div>
        </div>
    );
};

export default Products;