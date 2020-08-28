import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const first10 = fakeData.slice(0, 10);
    
    return (
        <div>
            
        </div>
    );
};

export default Shop;