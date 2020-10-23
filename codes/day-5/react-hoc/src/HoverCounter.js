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

const HoverCounter = withCounter(OriginalHoverCounter);
export default HoverCounter;

React.forwardRef(OriginalHoverCounter)
