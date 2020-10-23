import React, { Component } from 'react'
import withCounter from './withCounter'

function OriginalHoverCounter({ counter, counterHandler }) {
    return (
        <div>
            <span>Hover Counter Value:&nbsp;{counter}</span>
            <br />
            <div onMouseOver={counterHandler}>Increase Counter By Hovering</div>
        </div>
    )
}

//const WithHoverCounter = withCounter(OriginalHoverCounter);
//const HoverCounter = React.memo(WithHoverCounter);
const HoverCounter = withCounter(OriginalHoverCounter, 20);
export default HoverCounter;


