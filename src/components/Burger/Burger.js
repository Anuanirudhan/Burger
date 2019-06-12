import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let Incred = Object.keys(props.inc)
    .map(key => {
        return [...Array(props.inc[key])].map((_, i)=> {
            return <BurgerIngredient key= {key+i} type={key}/>
        })
    })
    .reduce((arr,el) => {
        return arr.concat(el);
    })
    if(Incred.length == 0){
        Incred = "Please add ingrediants";
    }

    return (
        <div>
            <BurgerIngredient type="bread-top"/>
            {Incred}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default Burger;