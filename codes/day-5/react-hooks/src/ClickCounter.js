import React from 'react'
import useCounter from './useCounter'

export default function ClickCounter() {
    const [counterValue, increaseCounterValue] = useCounter();
    return (
        <div>
            <span>Counter Value:{counterValue}</span>
            <br />
            <button onClick={increaseCounterValue}>Increase</button>
        </div>
    )
}
