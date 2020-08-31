import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0);
    let shipping = 0;

    if (total >= 100) {
        shipping = 0;
    } else if (total >= 50) {
        shipping = 25;
    } else {
        shipping = 50;
    }
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Shipping Price: {shipping}</p>
        </div>
    );
};

export default Cart;