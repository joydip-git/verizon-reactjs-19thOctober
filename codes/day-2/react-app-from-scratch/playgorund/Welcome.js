//component: welcome
//spanElement = element
// const welcome = () => {
//     //<span id =''>Hello React JS</span>
//     const messge = 'Hello React JS'
//   const spanElement = document.createElement('span');
//     spanElement.id = 'messageSpan';
//     spanElement.innerHTML = messge;
//     return spanElement;
// }
import React from 'react'
export const Welcome = () => {
    //<span id =''>Hello React JS</span>
    const messge = 'Hello React JS'
    // const welcomeElement = React.createElement('div', { id: 'spanMessage', className: '' }, [span1,span2]);
    //JSX
    const welcomeElement = (
        <div>
            <span id='spanMessage' className=''>
                {messge}
            </span>
            <br />
            <span>
                Hi Guys...
            </span>
        </div>
    );
    return welcomeElement;
}
//export default Welcome;
/**
 * {
 *  type:'span',
 *  key:null,
 *  ref:null,
 *  props:{
 *   children:[message]
 *  }
 * }
 */