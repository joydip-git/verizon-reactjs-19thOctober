import React from 'react';
import { personList } from '../data/personList'
import Counter from './Counter';
import CounterCls from './CounterCls';
import Person from './Person';

export default class People extends React.Component {
    constructor() {
        super()

        this.inputRef = React.createRef();
        this.counterClsRef = React.createRef();
        this.counterRef = React.createRef();
        this.someRef = null;
        this.setSomeRef = (elementReference) => {
            console.log(elementReference)
            this.someRef = elementReference;
        }
    }
    state = {
        count: 10,
        listOfPeople: personList,
        showOrHide: true,
        errorMessage: ''
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
    validateInputHandler = () => {
        if (this.inputRef.current.value === '') {
            this.setState({ errorMessage: 'please enter value' })
        } else {
            this.setState({ errorMessage: '' })
        }
    }
    render() {
        return (
            <div>
                Refering By Callback:&nbsp;
                {/* Input:&nbsp;<input type='text' ref={(currentElement) => this.setSomeRef(currentElement)} /> */}
                Input:&nbsp;<input type='text' ref={this.setSomeRef} />
                <br />
                <button onClick={() => { if (this.someRef !== null) this.someRef.focus() }}>Focus By Callback Ref</button>
                <br />
                {/* <button onClick={() => this.counterClsRef.current.focusInput()}>Focus Child Input From Parent</button> */}
                <button onClick={() => this.counterRef.current.focus()}>Focus Child Input From Parent</button>
                <br />
                <br />
                Input:&nbsp;<input type='text' ref={this.inputRef} onChange={this.validateInputHandler} />
                {
                    this.state.errorMessage !== '' && (<span>{this.state.errorMessage}</span>)
                }
                <br />
                <button onClick={this.validateInputHandler}>Validate</button>
                <br />
                <button onClick={this.increaseCountHandler}>Increase Counter from Parent</button>
                <br />
                <br />
                <Counter ref={this.counterRef} count={this.state.count} changeCounter={this.countChangeHandler} />
                <br />
                <CounterCls ref={this.counterClsRef} count={this.state.count} changeCounter={this.countChangeHandler} />
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