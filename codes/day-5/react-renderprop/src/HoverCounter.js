import React from 'react'
import PropTypes from 'prop-types'

function HoverCounter({ counter, counterHandler, data }) {
    return (
        <div>
            <span>Hover Counter Value:&nbsp;{counter} and Data:{data}</span>
            <br />
            <div onMouseOver={counterHandler}>Increase Counter By Hovering</div>
        </div>
    )
}
HoverCounter.propTypes = {
    counter: PropTypes.number.isRequired,
    counterHandler: PropTypes.func.isRequired,
    data: PropTypes.number.isRequired
}
export default HoverCounter;


