import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'

const BuildControls = (props) => (
    <div className="control-wrapper">
        <BuildControl label='Cheese' type="cheese" addIngrediant={()=>props.addIngrediant('cheese')} removeIngrediant={()=>props.RemoveIngrediant('cheese')}/>
        <BuildControl label='Meat' type="meat" addIngrediant={()=>props.addIngrediant('meat')} removeIngrediant={()=>props.RemoveIngrediant('meat')}/>
        <BuildControl label='Bacon' type="bacon" addIngrediant={()=>props.addIngrediant('bacon')} removeIngrediant={()=>props.RemoveIngrediant('bacon')}/>
    </div>
)
export default BuildControls;