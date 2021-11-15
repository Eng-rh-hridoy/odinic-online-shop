import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    console.log(props.item);
    // const {price} = props.item;
    const Item = props.item;
    const price = Item.reduce((item, product) => item + product.price * product.quantity, 0);
    return (
        <div className="cart-container">
            <h1>Cart <FontAwesomeIcon icon={faShoppingCart} /><sup>{Item.length}</sup></h1>
            <h3>Price: <small>${price}</small></h3>
            <p>Shipping Cost: <small>$</small></p>
            <p>Tax: <small>$</small></p>
            <h1>Total: <small>$</small></h1>
        </div>
    );
};

export default Cart;