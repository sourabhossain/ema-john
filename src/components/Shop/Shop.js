import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product) => {
        const newCart = [...new Set([...cart, product])];
        setCart(newCart);
    } 

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product handleAddProduct={handleAddProduct} product={product}></Product>)
                }
            </div>
            
            <div className="cart-container">
                <h2>Order Summary</h2>
                <h4>{cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop;