import React from 'react'
import withCounter from './withCounter'
import withMemory from './withMemory';

function ClickCounter({ counter, counterHandler, value }, ref) {
    return (
        <div>

            <span>Click Counter Value:&nbsp;{counter} and Value:{value}</span>
            <br />
            <button onClick={counterHandler}>Increase Click Counter</button>
        </div>
    )
}

//const ClickCounter = withCounter(OriginalClickCounter, 10);
//export default withMemory(ClickCounter)
//export default ClickCounter;
//export default React.forwardRef(withCounter(ClickCounter, 10));
export default withCounter(ClickCounter, 10);
