import React from 'react';
import Keypad from './Keypad';
import MoneyTerminal from './MoneyTerminal';
import './Terminal.css';

import { connect } from 'react-redux';
import { buyAttempt } from '../../actions';



const Terminal = (props) => {
    const { buyAttempt } = props;

    const handleBuyAttempt = () => {
        buyAttempt()
    };

    return (
            <div>
                <Keypad />
                <button className="KeypadButton Buy" onClick={handleBuyAttempt}>BUY</button>
                <MoneyTerminal />
            </div>
        )
};

const mapStateToProps = (state) => {
    return {
        codeData: state.code,
        moneyData: state.moneyData
    };
};

export default connect(
    mapStateToProps,
    { buyAttempt }
)(Terminal);
