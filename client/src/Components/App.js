import React from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Profile from './profile/Profile'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Route path="/profile" component={Profile} />
            </Router>

        )
    }
}

export default App