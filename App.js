import React, { Component } from 'react'
import Map from './src/components/Map'
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
class App extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        let name = 'sdsfn'
        return <div style={{ color: 'red' }}>
            <p>dsfdsfssadasd</p>
            <p>asdsa</p>
            <p>asdsa</p>
            <p>asdsa</p>
            <p>asdsa1</p>
            <p>asdsa1</p>
            <p>asdsa1</p>
            <p>asdsa1</p>
            <p>asdsa1</p>
            <p onClick={this.handleClick}>asdsa1</p>
            <Map />
            <div style={{ height: '60', background: 'pink' }}>
                <span onClick={this.handle} style={{ padding: '10px', margin: '10px' }}>1</span>
                <span onClick={this.handle2} style={{ padding: '10px', margin: '10px' }}>2</span>
                <span style={{ padding: '10px', margin: '10px' }}>2</span>
            </div>
            {/* <Router> */}
                <Switch>
                    <Route key="home" exact path="/home" component={Home}></Route>
                    <Route key="car" exact path="/car" component={Car}></Route>
                    <Route key="index" exact path="*" component={Index}></Route>
                </Switch>
            {/* </Router> */}

        </div>
    }
    handleClick = () => {
        alert('xiao')
    }
    handle = () => {
        console.info(this.props, 'props')
        console.info(this.context, 'props')
        this.props.history.push('/home')
    }
    handle2 = () => {
        this.props.history.push('/car')
    }
}
function Home(props) {
    console.info(props,'home')
    return <div key={props.location.pathname}>{props.name || '3242423Home'}</div>
}
function Car(props) {
    console.info(props,'car')

    return <div key={props.location.pathname}>{props.name || '3242423Car'}</div>
}
function Index(props) {
    return <div key={props.location.pathname}>{props.name || '3242423Index'}</div>
}

export default withRouter(App)
