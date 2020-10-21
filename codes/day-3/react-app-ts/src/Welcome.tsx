import React, { Component } from 'react';
import IPerson from './person.model';
import { personList } from './personList';

type welcomeState = {
    counter: number,
    showOrHide: boolean,
    people: IPerson[]
}

type welcomeProps = {
    data: number,
    name: string
}
export default class Welcome extends Component<welcomeProps, welcomeState> {
    state: welcomeState = {
        counter: 0,
        showOrHide: true,
        people: personList
    }
    updateCounter = (): number => {
        return 10;
    }
    render() {
        return (
            <span>

            </span>
        );
    }
}