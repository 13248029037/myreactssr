import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from '../components/Router'
import { Provider } from 'mobx-react'
import createStore from '../store/index.js'
import '../lib/iconfont.css';
import '../lib/init.css';
let store = new createStore();
console.info(store, 'werwerwr')
ReactDOM.render(
    <Provider {...store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'))
if (module.hot) {
    module.hot.accept();
}

