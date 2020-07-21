import React from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Profile from './profile/Profile'
import Register from './auth/register/register'
import Login from './auth/login/login'
import Header from './Header';
import Home from './home/home';
import PageNotFound from './pageNotFound/pageNotFound';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SecuredRoute from './SecuredRoute'


class App extends React.Component {
    state = {
        isLoggedIn: false
    }

    handleLogin = (check) => {
        this.setState({
            isLoggedIn: check
        })
        console.log(this.state.isLoggedIn);
    }
    render() {
        return (
            <React.Fragment> 
                <Router>
                    <Header onLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn}/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} children={
                            <Login onLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn}/>
                        } />
                        <SecuredRoute path="/profile" component={Profile} isLoggedIn={this.state.isLoggedIn}/>
                        <Route component={PageNotFound} />
                    </Switch>
                </Router>
            </React.Fragment>

        )
    }
}

export default App