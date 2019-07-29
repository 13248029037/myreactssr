import React, { Component } from 'react'
export default (props) => {
    const handle = (path) => {
        console.info(props, 'props')
        props.handle(path)
    }
    const type = [
        {
            id: 1,
            value: 'home',
            path: '/home'
        },
        {
            id: 2,
            value: 'car',
            path: '/car'
        },
        {
            id: 3,
            value: 'index',
            path: '/index'
        }
    ]
    return <div style={{ height: '100px', background: '#eee' }}>
        {type.map(item => <span onClick={() => handle(item.path)} style={{ padding: '20px', margin: '10px', cursor: 'pointer', background: '#000', color: '#fff' }} key={item.id}>{item.value}</span>)}
    </div>
}

