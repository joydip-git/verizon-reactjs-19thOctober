import React, { Component } from "react";

const withCounter = (OriginalComponent) => {

    class WithCounter extends Component {
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
            return <OriginalComponent counter={this.state.counter}
                counterHandler={this.increaseCounter} />
        }
    }

    return WithCounter;
}
export default withCounter;