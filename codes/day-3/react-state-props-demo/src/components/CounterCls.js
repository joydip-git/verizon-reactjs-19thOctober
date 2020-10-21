import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CounterCls extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        changeCounter: PropTypes.func.isRequired
    }

    inputRef = React.createRef();
    updateCount = () => {
        // console.log(inputRef.current.value)
        // inputRef.current.focus()
        this.props.changeCounter(parseInt(this.inputRef.current.value))
    }
    focusInput = () => {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                Counter Cls Value:&nbsp;{this.props.count}
                <br />
            Enter Value:&nbsp;
                <input
                    type='text'
                    ref={this.inputRef}
                />
                <br />
                <button onClick={this.updateCount}>Update Count</button>
            </div>
        )
    }
}
