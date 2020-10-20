import React from 'react'
export const Welcome = () => {
    const messge = 'Hello React JS'
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