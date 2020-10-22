import React from 'react'
import PropTypes from 'prop-types'

function CounterOriginal(props) {
    console.log('[Counter] rendered')
    return (
        <div>
            Counter Value: &nbsp;
            <input type='text' value={props.counterValue} onChange={(e) => props.counterHandler(parseInt(e.target.value))} />
        </div>
    )
}

CounterOriginal.propTypes = {
    counterValue: PropTypes.number.isRequired,
    counterHandler: PropTypes.func.isRequired
}

const Counter = React.memo(CounterOriginal)

export default Counter

