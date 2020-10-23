import React, { Component } from 'react'
import withCounter from './withCounter'

function OriginalHoverCounter({ counter, counterHandler, data }) {
    return (
        <div>
            <span>Hover Counter Value:&nbsp;{counter} and Data:{data}</span>
            <br />
            <div onMouseOver={counterHandler}>Increase Counter By Hovering</div>
        </div>
    )
}

//const WithHoverCounter = withCounter(OriginalHoverCounter);
//const HoverCounter = React.memo(WithHoverCounter);
const HoverCounter = withCounter(OriginalHoverCounter, 20);
export default HoverCounter;


