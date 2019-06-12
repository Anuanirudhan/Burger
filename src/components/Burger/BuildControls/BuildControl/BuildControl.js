import React from 'react';

const BuildControl = (props) => (
    <div className="BuildControl">
        <label>{props.label}</label>
        <button onClick={props.removeIngrediant}>Less</button>
        <button onClick={props.addIngrediant}>More</button>
    </div>
)
export default BuildControl;