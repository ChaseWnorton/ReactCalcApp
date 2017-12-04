import React, { Component } from 'react';

class Delete extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClickDel();
    }
    render() {
        return (
            <div className='row'>
                <button className='button' id="del" onClick={this.handleClick} >Del</button>
            </div>
        )
    }
}
export default Delete;