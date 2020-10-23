import React from 'react'
import PropTypes from 'prop-types'
import withError from './withError'
/*
function Hero({ heroName }) {
    let design = null;
    try {
        if (heroName === 'Joker') {
            throw new Error('Not a Hero')
        }
        design = <span>Hero Name:&nbsp;{heroName}</span>
    }
    catch (e) {
        design = <span>Error Occurred</span>
    }
    return design;
}
*/
function Hero({ heroName }) {
    if (heroName === 'Joker') {
        throw new Error('Not a Hero')
    }
    console.log('[Hero] rendered')
    let design = <span>Hero Name: &nbsp;{heroName}</span>
    return design;
}

Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}

//export default Hero
export default withError(Hero);

