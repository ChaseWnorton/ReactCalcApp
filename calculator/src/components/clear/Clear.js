import React, { Component } from 'react';

class Clear extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClickClear();
    }
    render() {
        return (
            <div className='row'>
                <button className='button' id="clear" onClick={this.handleClick}>Clear</button>
            </div>
        )
    }
}
export default Clear;