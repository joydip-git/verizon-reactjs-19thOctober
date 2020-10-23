import React from 'react'
import withCounter from './withCounter'
import withMemory from './withMemory';

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
//export default withMemory(ClickCounter)
export default ClickCounter;
