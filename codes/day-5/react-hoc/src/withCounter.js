import React, { Component } from "react";

//const withCounter = () => {
const withCounter = (OriginalComponent, initialState) => {

    class WithCounter extends Component {
        state = {
            counter: initialState
        }
        increaseCounter = () => {
            this.setState(ps => {
                return {
                    counter: ps.counter + 1
                }
            })
        }
        render() {
            return <OriginalComponent counter={this.state.counter}
                counterHandler={this.increaseCounter} />
        }
        /**
         * render() {
            return <div>{this.props.children}<div/>
        }
         */
    }
    return WithCounter;
}
export default withCounter;