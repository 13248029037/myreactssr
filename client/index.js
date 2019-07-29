import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'mobx-react'
import createStore from '../store/index.js'
import combineServerData from '../utils/index.js';
let store = new createStore();
combineServerData(store,window.__INITIAL_STATE__);
console.info(store,'werwerwr')
ReactDOM.hydrate(
    <Provider {...store}>
        <App />
    </Provider>
    , document.getElementById('app'))
if (module.hot) {
    module.hot.accept();
}
