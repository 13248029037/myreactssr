// import assethook from 'asset-require-hook';
// assethook({
//     extensions: ['png', 'jpg','jpeg']
// });
import csshook from 'css-modules-require-hook';
import express from 'express'
import ReactDOMServer from 'react-dom/server';
import React from 'react'
import fs from 'fs'
import ServerApp from './App'
import Loadable from "react-loadable";
console.info(ServerApp, 'ServerAppServerAppServerAppServerApp')
const app = express();
import { toJS } from 'mobx'
const staticPath = './dist/'
import createStore from '../store/index'
import { Provider } from 'mobx-react'
import asyncBootstrap from 'react-async-bootstrapper'
import routes from '../config/routes'
import '../lib/iconfont.css';
import '../lib/init.css';
// store.appStore.state.tag = 'xiaoshulin'
// 处理图片

const prepareStore = (store) => {
    const keyArr = Object.keys(store);
    const output = {};
    keyArr.forEach((key) => {
        output[key] = toJS(store[key]);
    });
    return output;
};
app.use((req, res, next) => {
    console.info(req.url, 'reqreq')
    if (req.url.startsWith('/static/')) {
        console.info(req.url, 'req.urlreq.urlreq.url')
        next();
        return;
    }
    let store = new createStore()
    let ff = null
    let f = function () {
        let AppString = ReactDOMServer.renderToString(<Provider {...store}><ServerApp url={req.url} /></Provider>)
        console.info(AppString, 'AppStringAppString')
        let html = fs.readFileSync('./dist/index.html').toString();
        html = html.replace(/<!--app-->/, AppString)
        html = html.replace(/window.__INITIAL_STATE__/, 'window.__INITIAL_STATE__=' + JSON.stringify(prepareStore(store)))
        console.info(html, 'htmlhtml')
        return res.send(html)
    }
    routes.forEach(item => {
        if (item.path === req.url) {
            console.info(item.c.bootstrap, 'item.bootstrapbootstrapbootstrapbootstrap')
            ff = item.c.bootstrap
        }
    })
    if (ff) {
        ff(store).then(data => {
            f()
        }).catch(err => {
            res.end('error')
        })
    } else {
        f()
    }

})
app.use('/static', express.static(staticPath))

Loadable.preloadAll().then(() => {
    app.listen(3000, () => {
        console.log('Running on http://localhost:3000/');
    });
});

