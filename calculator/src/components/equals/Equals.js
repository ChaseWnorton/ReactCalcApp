import React, { Component } from 'react';

class Equals extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClickEquals();
    }
    render() {
        return (
            <div className='row'>
                <button className='button' id="equals" onClick={this.handleClick} >=</button>
            </div>
        )
    }
}
export default Equals;