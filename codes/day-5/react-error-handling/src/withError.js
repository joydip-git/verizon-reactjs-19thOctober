import React, { Component } from 'react'

const withError = (WrappedComponent) => {
    class WithError extends Component {
        state = {
            errorMessage: ''
        }

        static getDerivedStateFromError(error) {
            return {
                errorMessage: error
            }
        }
        componentDidCatch(error, info) {
            // this.setState({
            //     errorMessage: error
            // })
            console.log(error)
            console.log(info)
        }
        render() {
            //console.log('[EB] rendered')
            let design = null;
            if (this.state.errorMessage === '') {
                design = <WrappedComponent {...this.props} />;
            } else {
                design = <span>Error Occurred</span>
            }
            return design;
        }
    }
    return WithError
}
export default withError;