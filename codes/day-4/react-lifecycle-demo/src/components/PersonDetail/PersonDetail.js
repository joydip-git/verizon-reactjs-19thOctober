import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PersonDetail extends Component {
    state = {
        selectedPerson: null
    }
    static propTypes = {
        personId: PropTypes.number.isRequired,
        updatePerson: PropTypes.func.isRequired
    }

    render() {
        //fetch person detail from the array personList corresponding to the given personId
        //save the person detail in the state

        const { selectedPerson, updatePerson } = this.state;
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
                                <td><input type='text' value={selectedPerson.name} onChange={(e) => updatePerson(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td>
                                    Age:
                        </td>
                                <td><input type='text' value={selectedPerson.age} onChange={(e) => updatePerson(parseInt(e.target.value))} /></td>
                            </tr>
                        </table>)
                        :
                        (<span>Loading....</span>)
                }
            </div>
        )
    }
}
