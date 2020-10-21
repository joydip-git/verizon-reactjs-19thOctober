import React from 'react'
import PropTypes from 'prop-types'

function Person(props) {
    const { personData, changePerson } = props;
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
            <input type='text' value={personData.name} onChange={(e) => changePerson(personData.id, 'name', e.target.value)} />
            <br />
            Age:&nbsp;
            <input type='text' value={personData.age} onChange={(e) => changePerson(personData.id, 'age', parseInt(e.target.value))} />
            <br />
            {/* <button onClick>Update Person Data</button> */}
            <br />
        </div>
    )
}

Person.propTypes = {
    personData: PropTypes.object.isRequired,
    changePerson: PropTypes.func.isRequired
}

export default Person

