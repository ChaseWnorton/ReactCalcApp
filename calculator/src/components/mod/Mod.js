import React, { Component } from 'react';

class Modulous extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.onClickMath(e.target.value);
    }
    render() {
        return (
            <div className='row'>
                <button className='button' id="mod" onClick={this.handleClick} value={'%'}>%</button>
            </div>
        )
    }
}
export default Modulous;