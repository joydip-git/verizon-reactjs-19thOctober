import React from 'react'
import withCounter from './withCounter'

function OriginalClickCounter({ counter, counterHandler }) {
    return (
        <div>
            <span>Click Counter Value:&nbsp;{counter}</span>
            <br />
            <button onClick={counterHandler}>Increase Click Counter</button>
        </div>
    )
}

const ClickCounter = withCounter(OriginalClickCounter);
export default ClickCounter;
