const initialState = () => ({
    products: [],
    error: '',
});

export default (state = initialState(), action) => {
    switch (action.type) {
        case 'PRODUCT_TRAY': {
            console.log(action.payload);
            if (state.products.length < 3) {
                return {
                    ...state,
                    products: [...state.products, action.payload],
                }
            }
            return {
                ...state,
                products: [...state.products],
                error: 'Maximum three products allowed in Tray! Please refresh the page!',
            }
        }
        default:
            return state;
    }
};
