import React from 'react'
import { StaticRouter } from 'react-router-dom'
import App from '../components/Router.js'
import { Provider, useStaticRendering } from 'mobx-react'
import App from '../components/Router'
// 让mobx在服务端渲染的时候不会重复数据变换
useStaticRendering(true) // 使用静态的渲染
export default (store = {}, url = '/', context = {}) => {
    return (
        <Provider {...store} >
            <StaticRouter location={url} context={context}>
                <App />
            </StaticRouter>
        </Provider>
    )
}
