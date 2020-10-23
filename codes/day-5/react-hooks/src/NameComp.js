import React, { useEffect, useRef } from 'react'

const obj = {
    data: 10
}
function NameComp({ name, nameHandler }) {

    const refToInput = useRef(null);
    // const refToObj = useRef(obj);
    // refToObj.current.data++;

    useEffect(() => {
        console.log('[NC] this will run always')
        return () => {
            console.log('[NC] use this for clean up everytime')
        }
    });

    //componentDidiUpdate
    useEffect(() => {
        console.log('[NC] this will run when name changes')
        return () => {
            console.log('[NC] use this for clean up only when name changes')
        }
    }, [name]);

    //componentDidMount 
    useEffect(() => {
        console.log('[NC] this will run only time..')
        refToInput.current.focus();
        // return () => {
        //     
        //     console.log('[NC] use this for clean up one time')
        // }
    }, []);

    //componentWillUnmount
    useEffect(() => {
        return () => {
            //componentWillUnmount
            console.log('[NC] use this for clean up one time')
        }
    }, []);

    console.log('[NC] rendered')
    return (
        <div>
            Name:&nbsp;
            <input type='text' value={name} onChange={(e) => nameHandler(e.target.value)} ref={refToInput} />
        </div>
    )
}

export default NameComp
