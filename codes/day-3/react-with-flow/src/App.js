import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';

type appState = {
  count: number,
  showOrHide: boolean
}
type appProps = {
  value: number
}
class App extends Component<appProps, appState> {
  state: appState = {
    count: 0,
    showOrHide: true
  }
  render() {
    return (
      <div className="App" >
        <Welcome data={10} name='joy' />
      </div>
    );
  }
}

export default App;
