import React, { Component } from 'react';

class Numbers79 extends Component {
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
                <button className='button' id="7" onClick={this.handleClick} value={7}>7</button>
                <button className='button' id="8" onClick={this.handleClick} value={8}>8</button>
                <button className='button' id="9" onClick={this.handleClick} value={9}>9</button>
            </div>
        )
    }
}
export default Numbers79;