import React, { Component } from 'react';

class Numbers0 extends Component {
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
                <button className='button' id="0" onClick={this.handleClick} value={0}>0</button>
                <button className='button' id="." onClick={this.handleClick} value={"."}>.</button>
            </div>
        )
    }
}
export default Numbers0;