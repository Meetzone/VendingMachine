import React from 'react';
import { connect } from 'react-redux';
import { addProducts } from '../../actions';

import './ProductDisplay.css';

class ProductsDisplay extends React.Component {
    componentDidMount() {
        const { addProducts } = this.props;
        addProducts();
    }

    renderProduct = () => {
        return this.props.products.map(product => {
            return (
                <li key={product.id} className="Product">
                    <p>{`${product.qty} items`}</p>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <div className="more-info">
                        <p>{`Code: ${product.code}`}</p>
                        <p>{`Price: ${product.price} \u20AC`}</p>
                    </div>
                </li>
            )
        });
    };

    render () {
        return (
            <div className="Products-container">
                <ul>
                    {this.renderProduct()}
                </ul>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
	return {
        products: state.products.productsList,
    };
};

export default connect(
    mapStateToProps,
    { addProducts }
    )(ProductsDisplay);
