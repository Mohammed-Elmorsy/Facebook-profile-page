import React from 'react'
import { Link } from 'react-router-dom'
import headerStyle from '../App.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">Student</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item" >
                  <a className="nav-link" href="http://localhost:8030/login">home</a>
                </li>
              </ul>
              <ul className="navbar-nav mr-right">

                <li className="nav-item" >
                  <a className="nav-link" href="http://localhost:8030/logout">logout</a>
                </li>
              </ul>

            </div>
          </nav>
    )
}
export default Header;