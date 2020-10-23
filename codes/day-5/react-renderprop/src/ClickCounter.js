import React from 'react'
import PropTypes from 'prop-types'

function ClickCounter({ counterValue, counterHandlerFn, value }, ref) {
    return (
        <div>
            Click Counter Value:&nbsp;<input type='text' value={counterValue} ref={ref} />
            <br />
            <span> Value:{value}</span>
            <br />
            <button onClick={counterHandlerFn}>Increase Click Counter</button>
        </div>
    )
}
ClickCounter.propTypes = {
    counterValue: PropTypes.number.isRequired,
    counterHandlerFn: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}
export default React.forwardRef(ClickCounter);
