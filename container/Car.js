import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import img from '../img/timg.jpeg'
import './car.less'
// console.info(style,'style')
@inject('appStore')
@observer
export default class Car extends Component {
    static bootstrap(store) {
        console.info(store, 'storestorestorestorestore')
        // console.info(store.appStore.getList(),'prppsoidos')
        return store.appStore.getList()

    }
    componentDidMount() {
        if (!this.props.appStore.state.List.length) {
            this.props.appStore.getList()
        }
    }
    render() {
        console.info(this.props.store, 'rerererer')
        return <div style={{ height: '200px', background: 'red', fontSize: '20px' }}>
            <img src={img}></img>
            <div>
                <span className="iconfont icon-aixin" style={{ fontSize: '30px', color: 'red' }}></span>
                <span className="iconfont icon-aixin" style={{ fontSize: '30px', color: 'red' }}></span>
                <span className="iconfont icon-aixin" style={{ fontSize: '30px', color: 'red' }}></span>
                <span className="iconfont icon-aixin" style={{ fontSize: '30px', color: 'red' }}></span>
            </div>
            <p>32424234</p>

            <div>{this.props.appStore.state.tag}</div>
            {this.props.appStore.state.List.map(item => <div key={item}>{item}</div>)}
            {/* <div>{this.props.homestore.name}</div> */}
        </div>
    }
}

