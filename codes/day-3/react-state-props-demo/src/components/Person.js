import React from 'react'
import PropTypes from 'prop-types'

function Person(props) {
    const { personData } = props;
    const personStyle = {
        border: '2px solid blue',
        borderRadius: '3px',
        margin: '10px'
    }
    return (
        <div style={personStyle}>
            Id:&nbsp;
            <input type='text' value={personData.id} readOnly />
            <br />
            Name:&nbsp;
            <input type='text' value={personData.name} />
            <br />
            Age:&nbsp;
            <input type='text' value={personData.age} />
            <br />
            <button>Update Person Data</button>
            <br />
        </div>
    )
}

Person.propTypes = {
    personData: PropTypes.object.isRequired
}

export default Person

