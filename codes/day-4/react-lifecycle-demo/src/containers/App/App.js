import React, { Component } from 'react';
import Counter from '../../components/Counter/Counter';
import PersonDetail from '../../components/PersonDetail/PersonDetail';
import PersonRecord from '../../components/PersonRecord/PersonRecord';
import { personList } from '../../data/personList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    console.log('[App] created')
    this.state = {
      counter: 0,
      personList: [],
      selectedPersonId: 0
    }
  }

  static getDerivedStateFromProps(newProps, currentState) {
    // return {
    //   counter: newProps.cv + currentState.counter
    //}
    console.log('[App] getDerviedStateFromProps')
    return null;
  }
  selectPersonHandler = (personId) => {
    this.setState({ selectedPersonId: personId })
  }
  updateCounterHandler = (newCounter) => {
    this.setState({ counter: newCounter })
  }
  updatePersonHandler = (personId, propertyName, propertyValue) => {
    const foundPersonIndex = this.state.personList.findIndex(p => p.id === personId);

    const copyOfPeople = [...this.state.personList]
    const foundPersonCopy = { ...this.state.personList[foundPersonIndex] }

    foundPersonCopy[propertyName] = propertyValue
    copyOfPeople[foundPersonIndex] = foundPersonCopy;

    this.setState({
      personList: copyOfPeople
    })
  }
  componentDidMount() {
    console.log('[App] mounted')
    //fetch data from restful API server/database
    //make network requests
    this.setState({
      personList: personList
    })
  }
  render() {
    console.log('[App] rendered')
    return (
      <div className="App">
        <Counter counterValue={this.state.counter} counterHandler={this.updateCounterHandler} />
        <br />
        {
          (this.state.personList !== null && this.state.personList.length > 0) ?
            (
              <div style={{ border: '2px solid black', margin: '100px' }}>
                {
                  this.state.personList.map(p => {
                    return <PersonRecord person={p} key={p.id} selectPerson={this.selectPersonHandler} />
                  })
                }
              </div>
            ) : (<span>Person Records Loading....</span>)
        }
        <br />
        <div>
          {
            this.state.selectedPersonId > 0 && (<PersonDetail personId={this.state.selectedPersonId} updatePerson={this.updatePersonHandler} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
