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
        //this.countChangeHandler = this.countChangeHandler.bind(this);
    }
    //Diffing algo
    countChangeHandler = (newCount) => {
        // console.log(this)
        // console.log(newCount)
        //this.state.count = newCount;
        this.setState({
            count: newCount
        }, () => console.log(this.state))
        // setTimeout(() => {
        //     console.log(this.state)
        // }, 1000);
    }
    increaseCountHandler = () => {
        this.setState((cs) => {
            return {
                count: cs.count + 1
            }
        }, () => console.log(this.state))
        // this.setState((cs, props) => {
        //     return {
        //         count: cs.count + props.data + 1
        //     }
        // }, () => console.log(this.state))
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
                        return <Person personData={p} key={p.id} />
                    })
                    /**
                    [{p1},{p2},{p3}] => [{PE2},{PE1},{PE3}]
                     */
                    /*[1, 2, 3, 4].map((number) => {
                        return 'Value :' + (number * 5);
                    })
                    */
                }
            </div>
        )
    }
}