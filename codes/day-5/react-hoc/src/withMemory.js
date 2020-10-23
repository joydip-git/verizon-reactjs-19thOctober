
import React, { Component } from 'react'

const withMemory = (OC) => {
    class WithMemory extends Component {
        state = {

        }
        shouldComponentUpdate(newProps, newState) {

            // for (const propName in newProps) {                   
            //     if(newProps[propName]!== this.props[propName])
            // }
            return true;
        }
        render() {
            return (
                <div>
                    <OC />
                </div>
            )
        }
    }
    return WithMemory;
}

export default withMemory;