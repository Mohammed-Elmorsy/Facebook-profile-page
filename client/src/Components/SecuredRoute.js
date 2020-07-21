import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

const SecuredRoute = (props) => {
    console.log(props.isLoggedIn);
    return (       
        <Route path={props.path} render={data => props.isLoggedIn ? (
            <props.component {...data}></props.component>) :
            (<Redirect to={{ pathname: '/register' }}></Redirect>)}>
        </Route>
    )

}

export default SecuredRoute;