import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import moneyReducer from './moneyReducer';
import codeReducer from './codeReducer';
import boughtProductsTrayReducer from "./boughtProductsTrayReducer";

export default combineReducers({
    products: productsReducer,
    moneyData: moneyReducer,
    code: codeReducer,
    basketProducts: boughtProductsTrayReducer,
});
