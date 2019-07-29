import React, { Component } from 'react'
import PropTypes from "prop-types";
import Head from '../components/Head'
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import routes from '../config/routes'
class RouterContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <Head handle={this.handle}></Head>
            <Switch>
                {routes.map(item => <Route key={item.id} exact path={item.path} component={item.component}></Route>)}
                <Redirect to={'/index'}></Redirect>
            </Switch>
        </div>
    }
    handle = (path)=>{
        this.props.history.push(path)
    }

}
export default withRouter(RouterContainer)
