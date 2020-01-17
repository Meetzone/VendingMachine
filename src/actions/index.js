import { myList } from '../data/products';

// CODE ACTIONS
export const setCode = (code) => ({
    type: 'CODE_SET',
    payload: code,
});

export const setCodeError = () => ({
    type: 'CODE_ERR'
});

export const resetCode = () => ({
    type: 'CODE_RESET'
});


// PRODUCTS ACTIONS
export const addProducts = () => {
    return {
        type: 'PRODUCT_ADD',
        payload: myList,
    }
};

export const updateProductsList = (qty) => {
    return {
        type: 'PRODUCT_UPDATE',
        payload: qty,
    }
};

export const buyProduct = (product) => {
    return {
        type: 'PRODUCT_BUY',
        payload: product,
    }
};

export const buyProductFail = (product) => {
    return {
        type: 'PRODUCT_BUY_FAIL',
        payload: product,
    }
};

export const placeInTray = (product) => {
    return {
        type: 'PRODUCT_TRAY',
        payload: product,
    }
};

// MONEY ACTIONS
export const addCredit = (amount) => {
    return {
        type: 'CREDIT_ADD',
        payload: amount,
    }
};

export const returnChange = (amount) => {
    return {
        type: 'CREDIT_RETURN',
        payload: amount,
    }
};


export const buyAttempt = () => {
    return (dispatch, getState) => {
        const state = getState();

        const code = state.code.code;
        const products = state.products.productsList;
        const credit = state.moneyData.amount;
        const targetedProduct = products.find(prod => prod.code === code);

        if (!targetedProduct) {
            dispatch(setCodeError())
        } else {
            if ( targetedProduct.qty <= 0 ) {
                dispatch(buyProductFail(targetedProduct));
            } else {
                if( credit >= targetedProduct.price ) {
                    dispatch(updateProductsList(targetedProduct));
                    dispatch(placeInTray(targetedProduct));
                }
                dispatch(resetCode());
                dispatch(buyProduct(targetedProduct));
            }
        }
    }
};
