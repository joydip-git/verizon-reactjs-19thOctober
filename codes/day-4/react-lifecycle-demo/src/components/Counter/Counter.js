import React from 'react'
import PropTypes from 'prop-types'

function Counter(props) {
    return (
        <div>
            Counter Value: &nbsp;
            <input type='text' value={props.counterValue} onChange={(e) => props.counterHandler(parseInt(e.target.value))} />
        </div>
    )
}

Counter.propTypes = {
    counterValue: PropTypes.number.isRequired,
    counterHandler: PropTypes.func.isRequired
}

export default Counter

