import React from 'react';
import { personList } from '../data/personList'
import Counter from './Counter';
import Person from './Person';

export default class People extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 10,
            listOfPeople: personList,
            showOrHide: true
        }
    }
    countChangeHandler = (newCount) => {
        this.setState({
            count: newCount
        }, () => console.log(this.state))
    }

    increaseCountHandler = () => {
        this.setState((cs) => {
            return {
                count: cs.count + 1
            }
        }, () => console.log(this.state))
    }
    updatePersonHandler = (personId, propertyName, propertyValue) => {

        const foundPersonIndex = this.state.listOfPeople.findIndex((p) => p.id === personId)

        const copyPeopleArr = [...this.state.listOfPeople]
        const copyPerson = { ...this.state.listOfPeople[foundPersonIndex] }

        copyPerson[propertyName] = propertyValue;
        copyPeopleArr[foundPersonIndex] = copyPerson;

        this.setState({
            listOfPeople: copyPeopleArr
        }, () => console.log(this.state))
    }
    render() {
        return (
            <div>
                <button onClick={this.increaseCountHandler}>Increase Counter from Parent</button>
                <br />
                <br />
                <Counter count={this.state.count} changeCounter={this.countChangeHandler} />
                <br />
                Person Records:
                <br />
                {
                    this.state.listOfPeople.map((p) => {
                        return <Person
                            personData={p}
                            key={p.id}
                            changePerson={this.updatePersonHandler}
                        />
                    })
                }
            </div>
        )
    }
}