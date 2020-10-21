import React from 'react';
import { personList } from '../data/personList'
import Counter from './Counter';

export default class People extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 10,
            listOfPeople: personList,
            showOrHide: true
        }
        //this.countChangeHandler = this.countChangeHandler.bind(this);
    }
    countChangeHandler = (newCount) => {
        console.log(this)
        console.log(newCount)
        this.state.count = newCount;
        console.log(this.state)
    }
    render() {
        return (
            <Counter count={this.state.count} changeCounter={this.countChangeHandler} />
        )
    }
}