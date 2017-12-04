import React, { Component } from 'react';

class Numbers46 extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.onClickValue(e.target.value);
    }
    render() {
        return (
            <div className='row'>
                <button className='button' id="4" onClick={this.handleClick} value={4}>4</button>
                <button className='button' id="5" onClick={this.handleClick} value={5}>5</button>
                <button className='button' id="6" onClick={this.handleClick} value={6}>6</button>
            </div>
        )
    }
}
export default Numbers46;