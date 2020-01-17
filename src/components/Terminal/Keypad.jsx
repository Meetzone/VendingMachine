import React from 'react';
import Keys from './Keys';
import { connect } from 'react-redux';
import { setCode} from '../../actions';
import { resetCode } from '../../actions';
import './Keypad.css';


const Keypad = (props) => {
    const { setCode, resetCode, codeData } = props;

    const handleCodeClick = (code) => {
        setCode(code);
    };

    return (
        <div className="CodeWrapper">
            <div className="CodeDisplay Display">
                { Boolean(codeData.code) ? <p className="KeypadCode">{codeData.code}</p> : '' }
                { Boolean(codeData.error) ? <p className="KeypadError">{codeData.error}</p> : '' }
            </div>
            <Keys buttons={['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']} onSelect={handleCodeClick} />

            <button className="KeypadButton KeypadReset" onClick={resetCode}>RESET</button>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        codeData: state.code
    };
};

export default connect(
    mapStateToProps,
    { setCode, resetCode }
)(Keypad);
