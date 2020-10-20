import React from 'react'

/**
 * attributes = {
 *   displayMessage:'Welcome to React JS',
 *   dataValue:10
 *   showFn:[Function]
 * }
 */
export function Welcome(props) {
    //console.log(this)
    //attributes.dataValue++; <--don't mutate property values received from parent component
    //they are all readonly
    const messageToParent = 'message from child';
    const callback = (e) => {
        props.showFn(e, messageToParent)
    }
    return (
        <div>
            <br />
            { /*<button onClick={props.showFn}>Show from Welcome</button>*/}
            {/* <button onClick={callback}>Show from Welcome</button> */}
            <button onClick={(e) => props.showFn(e, messageToParent)}>Show from Welcome</button>
            <br />
            <span>Message:&nbsp;{props.displayMessage}</span>
            <br />
            <span>Data:&nbsp;{props.dataValue}</span>
        </div>
    );
}
/**
 * {
 *  type:'div',
 *  ref:null,
 *  key:null,
 *  props:{
 *   displayMessage:'Welcome to React JS',
 *   dataValue:10,
 *   showFn:[Function],
 *   children:[<br/>,<butoon/>,br,span,br,span]
 *  }
 * }
 */