/* eslint no-eval: 0 */
import React, { Component } from 'react';
import '../App.css';
import Numbers79 from './number/Numbers79';
import Numbers46 from './number/Numbers46';
import Numbers13 from './number/Numbers13';
import Numbers0 from './number/Numbers0';
import Clear from './clear/Clear';
import Delete from './del/Delete';
import Divide from './divide/Divide';
import Equals from './equals/Equals';
import Addition from './plus/Addition';
import Modulous from './mod/Mod';
import Multiply from './multiply/Multiply';
import Subtract from './subtract/Subtract';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operator: null,
            currentValue: [],
            displayValue: [],
            storedCalc: null,
        };
        this.onClickValue = this.onClickValue.bind(this);
        this.onClickClear = this.onClickClear.bind(this);
        this.onClickDel = this.onClickDel.bind(this);
        this.onClickMath = this.onClickMath.bind(this);
        this.onClickEquals = this.onClickEquals.bind(this);
    }

    onClickValue(newValue) {
        this.setState(prevState => ({
            currentValue: [...prevState.currentValue, newValue],
            displayValue: [...prevState.currentValue, newValue],
        }))
    }
    onClickClear() {
        this.setState({
            operator: null,
            displayValue: [],
            currentValue: [],
            storedCalc: null,
        })
    }

    onClickDel() {
        let newValue = this.state.currentValue.slice();
        newValue.pop();
        if(newValue[newValue.length - 1] === '.') {
            newValue.pop();
        }
        this.setState(
            {
                currentValue: newValue,
                displayValue: newValue,
            }
        )
    }

    mathThisShit = (operator, x, y) => {
        const math_obj = {
            '+': function (x, y) { return x + y },
            '-': function (x, y) { return x - y },
            '/': function (x, y) {return x / y},
            '*': function (x, y) {return x * y},
            '%': function (x, y) {return x % y}
        };
        return math_obj[operator](x,y);
    };

    onClickMath(operator) {
        if (this.state.storedCalc !== null) {
            let newDisplay;
            if(this.state.operator) {
                newDisplay = this.mathThisShit(this.state.operator, this.state.storedCalc, Number(this.state.currentValue.join('')));
            } else {
                newDisplay = this.mathThisShit(operator, this.state.storedCalc, Number(this.state.currentValue.join('')))
            }
                console.log(Number(this.state.currentValue.join('')));

            this.setState({
                operator: operator,
                storedCalc: newDisplay,
                currentValue: [],
                displayValue: [newDisplay],
            })
        } else {
            if(this.state.currentValue.length > 0) {
                this.setState(prevState => ({
                        operator: operator,
                        storedCalc: Number(prevState.currentValue.join('')),
                        currentValue: [],
                    }),
                )
            }
        }
    }
    onClickEquals() {
        let equals = this.mathThisShit(this.state.operator, this.state.storedCalc,  Number(this.state.currentValue.join('')));
        this.setState({
            operator: null,
            storedCalc: null,
            currentValue:[equals],
            displayValue:[equals]
        })
    }

  render() {
    return (
        <main>
            <section className='row' id='display'>{this.state.displayValue.length ? this.state.displayValue : 0}</section>
            <section className='row' id="row1">
                <Clear onClickClear={this.onClickClear} />
                <Delete onClickDel={this.onClickDel} />
                <Divide onClickMath={this.onClickMath} />
            </section>
            <section className='row' id="row2">
                <Numbers79 onClickValue={this.onClickValue} />
                <Multiply onClickMath={this.onClickMath} />
            </section>
            <section className='row' id="row3">
                <Numbers46 onClickValue={this.onClickValue} />
                <Subtract onClickMath={this.onClickMath} />
            </section>
            <section className='row' id="row4">
                <Numbers13 onClickValue={this.onClickValue} />
                <Addition onClickMath={this.onClickMath} />
            </section>
            <section className='row' id="row5">
                <Modulous onClickMath={this.onClickMath} />
                <Numbers0 onClickValue={this.onClickValue} />
                <Equals onClickEquals={this.onClickEquals} />
            </section>
        </main>
    );
  }
}

export default App;
