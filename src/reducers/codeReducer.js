const initialState = () => ({
    code: '',
    error: '',
});

export default (state = initialState(), action) => {
    switch (action.type) {
        case 'CODE_SET': {
            if((state.code + action.payload).length > 2) {
                return {
                    ...state,
                    code: state.code,
                    error: 'Code too long! Reset the code in order to proceed'
                }
            }
            return {
                ...state,
                code: state.code + action.payload,
            }
        }

        case 'CODE_ERR': {
            return {
                ...state,
                code: '',
                // error: true
                error: 'This code does not correspond to a product code! Please press "Reset" button',
            };
        }
        case 'CODE_RESET': {
            return {
                ...initialState()
            };
        }
        default:
            return state;
    }
};
