import React, { Component } from 'react';

class Numbers13 extends Component {
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
                <button className='button' id="1" onClick={this.handleClick} value={1}>1</button>
                <button className='button' id="2" onClick={this.handleClick} value={2}>2</button>
                <button className='button' id="3" onClick={this.handleClick} value={3}>3</button>
            </div>
        )
    }
}
export default Numbers13;