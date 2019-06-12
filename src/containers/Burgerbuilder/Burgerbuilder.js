import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            cheese :0,
            meat: 1,
            bacon:2
        },
        totalPrice : 4
    }
    PRICES = {
        bacon :2,
        meat: 1,
        cheese: .5
    }

    addIngrediant = (type) => {
        let newPrice = this.state.totalPrice + this.PRICES[type];
        let newIncList = {...this.state.ingredients};
        newIncList[type]=this.state.ingredients[type]+1;
        this.setState({totalPrice:newPrice, ingredients:newIncList});
    }
    RemoveIngrediant = (type) => {
        if(this.state.ingredients[type] <= 0) {
            return;
        }
        let newPrice = this.state.totalPrice - this.PRICES[type];
        let newIncList = {...this.state.ingredients};
        newIncList[type]=this.state.ingredients[type]-1;
        this.setState({totalPrice:newPrice, ingredients:newIncList});
    }
    render () {
        return (
            <div>
                <Burger inc ={this.state.ingredients}/>
                <p>Total price: {this.state.totalPrice}</p>
                <BuildControls addIngrediant={this.addIngrediant} RemoveIngrediant={this.RemoveIngrediant}/>
            </div>
        );
    }
}

export default BurgerBuilder;