import React, {Component} from 'react';

class BurgerIngredient extends Component {
    render () {
        let inc = null;
        switch(this.props.type) {
            case('bread-bottom'):
                inc = <div className="bread-bottom binc"></div>
                break;
            case('bread-top'):
                inc = <div className="bread-top binc"></div>
                break;
            case('meat'):
                inc = <div className="meat binc"></div>
                break;
            case('cheese'):
                inc = <div className="cheese binc"></div>
                break;
            case('bacon'):
                inc = <div className="bacon binc"></div>
                break;
            default:
                inc = null        
        }
    return inc;
    }
}
export default BurgerIngredient;