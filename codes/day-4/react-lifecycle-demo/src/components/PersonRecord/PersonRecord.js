import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PersonRecord.css'

export default class PersonRecord extends Component {
    constructor() {
        super()
        console.log('[PR] created')
        this.state = {

        }
    }
    static propTypes = {
        person: PropTypes.object.isRequired,
        selectPerson: PropTypes.func.isRequired
    }
    static getDerivedStateFromProps(newProps, currentState) {
        // return {
        //   counter: newProps.cv + currentState.counter
        //}
        console.log('[PR] getDerviedStateFromProps')
        return null;
    }
    componentDidMount() {
        console.log('[PR] mounted')
    }
    render() {
        console.log('[PR] rendered')
        const { person, selectPerson } = this.props;
        return (
            <div className='divStyle' onClick={() => selectPerson(person.id)}>
                <span>{person.name}</span>
            </div>
        )
    }
}
