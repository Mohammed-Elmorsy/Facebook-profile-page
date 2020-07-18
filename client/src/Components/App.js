import React from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Profile from './profile/Profile'
import Register from './auth/register/register'
import Login from './auth/login/login'
import Header from './Header';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <Router>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                </Router>
            </React.Fragment>

        )
    }
}

export default App