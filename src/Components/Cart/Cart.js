import React from 'react';

const Cart = (props) => {
    return (
        <div className="cart-container">
            this is cart {props.item.length}
        </div>
    );
};

export default Cart;