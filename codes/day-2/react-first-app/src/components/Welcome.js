import React from 'react'

/**
 * attributes = {
 *   displayMessage:'Welcome to React JS',
 *   dataValue:10
 *   showFn:[Function]
 * }
 */
export function Welcome(attributes) {
    //attributes.dataValue++; <--don't mutate property values received from parent component
    //they are all readonly
    const messageToParent = 'message from child';
    return (
        <div>
            <br />
            { /*<button onClick={attributes.showFn}>Show from Welcome</button>*/}
            <button onClick={(e) => attributes.showFn(e, messageToParent)}>Show from Welcome</button>
            <br />
            <span>Message:&nbsp;{attributes.displayMessage}</span>
            <br />
            <span>Data:&nbsp;{attributes.dataValue}</span>
        </div>
    );
}