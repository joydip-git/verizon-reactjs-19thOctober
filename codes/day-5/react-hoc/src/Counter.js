import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

//uplifted the state and functionality
export default class Counter extends Component {
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
                Just Counter
                {/* <ClickCounter counter={this.state.counter} counterHandler={this.increaseCounter} />
                <br/>
                <br/>
                <HoverCounter counter={this.state.counter} counterHandler={this.increaseCounter}/> */}
            </div>
        )
    }
}
