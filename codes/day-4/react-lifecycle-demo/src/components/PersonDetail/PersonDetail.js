import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getPersonList } from '../../data/personList'

export default class PersonDetail extends PureComponent {
    constructor() {
        super()
        console.log('[PD] created')
    }
    state = {
        selectedPerson: null
    }
    static propTypes = {
        personId: PropTypes.number.isRequired,
        updatePerson: PropTypes.func.isRequired
    }
    static getDerivedStateFromProps(newProps, currentState) {
        // return {
        //   counter: newProps.cv + currentState.counter
        //}
        console.log('[PD] getDerviedStateFromProps')
        return null;
    }
    // shouldComponentUpdate(newProps, currentState) {
    //     if (this.props.personId === newProps.personId)
    //         return false;
    //     else
    //         return true;
    // }
    componentDidMount() {
        console.log('[PD] mounted')
        setTimeout(() => {
            this.getPerson();
        }, 1000);
    }
    getSnapshotBeforeUpdate(oldProps, oldState) {
        return {
            x_pos: 10, y_pos: 20
        };
    }
    componentDidUpdate(oldProps, oldState, snapshot) {
        console.log(snapshot)
        console.log('[PD] updated')
        if (this.state.selectedPerson === null || this.state.selectedPerson.personId !== this.props.personId) {
            console.log('fetching person....')
            this.getPerson();
        }
    }
    componentWillUnmount() {
        console.log('[PD] unmounted')
    }
    getPerson = () => {
        let found = getPersonList().find(p => p.id === this.props.personId);
        this.setState({
            selectedPerson: found
        })
    }
    render() {
        //fetch person detail from the array personList corresponding to the given personId
        //save the person detail in the state
        console.log('[PD] rendered')
        const { selectedPerson } = this.state;
        const { updatePerson } = this.props;
        return (
            <div>
                {
                    selectedPerson !== null ?
                        (<table>
                            <tr>
                                <td>
                                    Id:
                        </td>
                                <td><input type='text' value={selectedPerson.id} readOnly /></td>
                            </tr>
                            <tr>
                                <td>
                                    Name:
                        </td>
                                <td><input type='text' value={selectedPerson.name} onChange={(e) => updatePerson(selectedPerson.id, 'name', e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td>
                                    Age:
                        </td>
                                <td><input type='text' value={selectedPerson.age} onChange={(e) => updatePerson(selectedPerson.id, 'age', parseInt(e.target.value))} /></td>
                            </tr>
                        </table>)
                        :
                        (<span>Loading....</span>)
                }
            </div>
        )
    }
}
