const initialState = () => ({
    amount: 0,
    change: 0,
    error: '',
});


export default (state = initialState(), action) => {
    switch (action.type) {
        case 'CREDIT_ADD': {
            const amount = parseInt(action.payload, 10);
            if ((state.amount + amount) >= 100) {
                return {
                    ...state,
                    amount: state.amount,
                    error: 'You have reached the maximum amount!',
                };
            }
            return {
                ...state,
                amount: state.amount + amount,
                error: '',
            };
        }
        case 'CREDIT_RETURN': {
            if (state.amount <= 0) {
                return {
                    ...state,
                    error: 'No change available!',
                };
            }
            return {
                ...state,
                amount: 0,
                change: state.amount,
                error: '',
            };
        }
        case 'PRODUCT_BUY': {
            if((state.amount - action.payload.price) < 0) {
                return {
                    ...state,
                    amount: state.amount,
                    error: 'Not enough credit! Add some!',
                }
            }
            return {
                ...state,
                amount: state.amount - action.payload.price,
                error: '',
            }
        }
        default:
            return state;
    }
};
