import React from 'react'
import Style from './pageNotFound.css'
import { BrowserRouter as Router, Switch, Route , Link } from "react-router-dom";

class PageNotFound extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div class="page-404">
                    <div class="outer">
                        <div class="middle">
                            <div class="inner">
                                <div class="inner-circle"><i class="fa fa-home"></i><span>404</span></div>
                                <span class="inner-status">Oops! You're lost</span>
                                <span class="inner-detail">
                                    We can not find the page you're looking for.
                    <Link to="/home" class="btn btn-info mtl"><i class="fa fa-home"></i>&nbsp;
                        Return home
                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PageNotFound;