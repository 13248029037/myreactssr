import express from 'express'
import ReactDOMServer from 'react-dom/server';
import React from 'react'
import fs from 'fs'
import ServerApp from './App'
import { Provider } from 'mobx-react';
import store from ''
const app = express();
const staticPath = './dist/'
let AppString = ReactDOMServer.renderToString(<Provider ><ServerApp/></Provider>)
let html = fs.readFileSync('./dist/index.html').toString();
html = html.replace(/<!--app-->/,AppString)
app.use((req,res,next)=>{
    console.info(req.url,'reqreq')
    if(req.url.startsWith('/static/')){
        console.info(req.url,'req.urlreq.urlreq.url')
        next();
        return;
    }
    return res.send(html)
})
app.use('/static',express.static(staticPath))
app.listen('3009',()=>{
    console.info('port 3000 is online')
})