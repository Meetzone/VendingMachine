import React from 'react';
import Keys from './Keys';

import { connect } from 'react-redux';
import { addCredit, returnChange } from '../../actions';

import './Keypad.css';
import './MoneyTerminal.css';


const MoneyTerminal = (props) => {
    const { addCredit, returnChange, moneyData } = props;

    const handleMoneyClick = (amount) => {
        addCredit(amount);
    };

    return (
        <div className="MoneyWrapper">
            <p>Please add credit below:</p>
            <Keys buttons={['1', '5', '10']} onSelect={handleMoneyClick}/>
            <div className="MoneyDisplay Display">
                <p>{ `${moneyData.amount} \u20AC` }</p>
                <p className="ChangeError">{ moneyData.error }</p>
            </div>

            <button className="KeypadButton ChangeButton" onClick = {returnChange}>RETURN CHANGE</button>
            <div className="ChangeTray">
                { `${moneyData.change} \u20AC` || moneyData.changeError }
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        moneyData: state.moneyData,
    };
};

export default connect(
    mapStateToProps,
    {
        addCredit,
        returnChange,
    }
)(MoneyTerminal);
