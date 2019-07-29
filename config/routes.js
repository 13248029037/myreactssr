import React from 'react'
import Loadable from "react-loadable";
import Home from '../container/Home.js'
import Car from '../container/Car.js'
import Index from '../container/Index.js'
export let env = process.env.NODE_ENV || 'development';

const Loading = ()=><div>loading...</div>
//路由信息
const routes = [
    {
        id: 1,
        label: '1-1',
        path: '/home',
        component: Loadable({
            loading:Loading,
            loader: () => import(`../container/Home.js`),
        }),
        c:Home
    },
    {
        id: 2,
        label: '1-2',
        path: '/car',
        component: Loadable({
            loading:Loading,
            loader: () => import(`../container/Car.js`),
        }),
        c:Car
    },
    {
        id: 3,
        label: '1-3',
        path: '/index',
        component: Loadable({
            loading:Loading,
            loader: () => import(`../container/Index.js`),
        }),
        c:Index
    }
   
]
export default routes



