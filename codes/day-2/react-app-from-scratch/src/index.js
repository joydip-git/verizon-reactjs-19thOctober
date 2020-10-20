//import { app} from './app'

import App from './App'
import * as ReactDOM from 'react-dom'
import React from 'react'

// const appDesign = App();
// const appHolder = document.getElementById('app');
// ReactDOM.render(appDesign, appHolder)

//const appDesign = App();
const appHolder = document.getElementById('app');
ReactDOM.render(<App />, appHolder)
