import React, { memo, useEffect } from 'react'

function CountComp({ count, countHandler }) {
    useEffect(() => {
        console.log('[CC] this will run always')
    });

    useEffect(() => {
        console.log('[CC] this will run when count changes')
    }, [count]);

    useEffect(() => {
        console.log('[CC] this will run only time..')
    }, []);

    console.log('[CC] rendered')
    return (
        <div>
            Count:&nbsp;
            <input type='text' value={count} readOnly />
            <br />
            <button onClick={countHandler}>Increase</button>
        </div>
    )
}
export default CountComp
