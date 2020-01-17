import React from 'react';

const Keys = (props) => {
    const { onSelect, buttons } = props;

    return (
        <div className="Keypad">
            {
                buttons.map((val) =>
                    <button className="KeypadButton" key={val} onClick={()=> onSelect(val)}>{val}</button>
                )
            }
        </div>
    )
};

export default Keys;
