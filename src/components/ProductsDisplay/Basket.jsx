import React from 'react';
import { connect } from 'react-redux';

import './Basket.css';

const Basket = (props) => {
    const { basketProducts, basketError } = props;

    const renderBasketProduct = () => {
        return basketProducts.map((product) => {
            return (
                <li className="Product" key={Math.random()}>
                    <img src={product.image} alt={product.title} />
                </li>
            )
        });
    };

    return (
        <div className="Products-container Basket">
            <ul>
                { renderBasketProduct() }
            </ul>
            <div className="BasketError">{ Boolean(basketError) ? basketError : '' }</div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        basketProducts: state.basketProducts.products,
        basketError: state.basketProducts.error,
    };
};

export default connect(mapStateToProps)(Basket);
