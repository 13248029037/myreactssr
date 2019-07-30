import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../components/Router'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Router>
            <Routes></Routes>
         </Router>
    }
}
export default App
