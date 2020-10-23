import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    static propTypes = {
        render: PropTypes.func.isRequired
    }
    state = {
        counter: 0
    }
    increaseCounter = () => {
        this.setState(ps => {
            return {
                counter: ps.counter + 1
            }
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.counter, this.increaseCounter)}
            </div>
        )
    }
}
