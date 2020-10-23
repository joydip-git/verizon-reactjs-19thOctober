import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

class App extends Component {
  inputRef = React.createRef()
  componentDidMount() {
    this.inputRef.current.focus();
  }

  // injectToClickCounter = (value, valueHandler) => {
  //   return <ClickCounter counterValue={value} counterHandlerFn={valueHandler} value={100} ref={this.inputRef} />;
  // }
  // injectToHoverCounter = (value, valueHandler) => {
  //   return <HoverCounter counter={value} counterHandler={valueHandler} data={20} />
  // }
  render() {
    return (
      <div className="App">
        {/* <Counter render={this.injectToClickCounter} />
        <br />
        <Counter render={this.injectToHoverCounter} /> */}
        <Counter render={
          (value, valueHandler) => {
            return <ClickCounter counterValue={value} counterHandlerFn={valueHandler} value={100} ref={this.inputRef} />
          }
        } />
        <br />
        <Counter render={
          (value, valueHandler) => {
            return <HoverCounter counter={value} counterHandler={valueHandler} data={20} />
          }
        } />
      </div>
    );
  }
}

export default App;
