import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
// import store from '../store/index'
@inject('appStore')
@observer
export default class Car extends Component {
    static bootstrap(store) {
        console.info(store,'storestorestorestorestore')
        // console.info(store.appStore.getList(),'prppsoidos')
        return store.appStore.getList()
        
    }
    componentDidMount () {
        if(!this.props.appStore.state.List.length){
            this.props.appStore.getList()
        }
    }
    render() {
        console.info(this.props.store, 'rerererer')
        return <div style={{ height: '200px', background: 'red', fontSize: '20px' }}>
            <p>32424234</p>
            <p>32424234</p>
            <p>32424234</p>
            <p>32424234</p>
            <p>32424234</p>
            <p>32424234</p>
            <p>32424234</p>
            <p>32424234</p>
            
            <div>{this.props.appStore.state.tag}</div>
            {this.props.appStore.state.List.map(item =><div key={item}>{item}</div>)}
            {/* <div>{this.props.homestore.name}</div> */}
        </div>
    }
}

