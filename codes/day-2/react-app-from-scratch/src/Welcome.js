import React from 'react'
export const Welcome = () => {
    const messge = 'Learned React app dev without any tool'
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