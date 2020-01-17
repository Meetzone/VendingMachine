import React from 'react';
import ProductsDisplay from './ProductsDisplay/ProductsDisplay.jsx';
import Basket from './ProductsDisplay/Basket.jsx';
import Terminal from './Terminal/Terminal.jsx';

import './App.css';


const App = () => {
    return (
        <div className="Container">
            <div className="Product-column">
                <ProductsDisplay />
                <Basket />
            </div>

            <div className="Terminal-column">
                <Terminal />
            </div>
        </div>
    );
};

export default App;
