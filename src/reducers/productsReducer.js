const initialState = () => ({
    productsList: [],
    error: '',
    errorClass: '',
});

export default (state = initialState(), action) => {
    switch (action.type) {
        case 'PRODUCT_ADD': {
            return {
                ...state,
                productsList: action.payload,
                error: '',
            };
        }
        case 'PRODUCT_UPDATE': {
            return {
                ...state,
                productsList: state.productsList.map(product => product.code === action.payload.code ?
                    {...product, qty: action.payload.qty - 1} : product
                ),
            };
        }
        case 'PRODUCT_BUY_FAIL': {
            return {
                ...state,
                productsList: state.productsList.map(product =>
                    product.code === action.payload.code ?
                    {
                        ...product,
                        image: 'https://i.ibb.co/wzjXCmJ/out-of-stock.png'
                    } : product
                ),
                error: 'Out of stock!',
            };
        }
        default:
            return state;
    }
};
