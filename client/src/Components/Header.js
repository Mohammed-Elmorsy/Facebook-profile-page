import React from 'react'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <NavLink className="navbar-brand" to="/home" activeClassName="activeLink">Home</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {props.isLoggedIn &&           
          <li className="nav-item" >
            <NavLink className="nav-link" to="/profile" activeClassName="activeLink">profile</NavLink>
          </li>
          }
        </ul>
        <ul className="navbar-nav mr-right">
          { !props.isLoggedIn &&
            <React.Fragment>
              <li className="nav-item" >
                <NavLink className="nav-link" to="/login" activeClassName="activeLink">login</NavLink>
              </li>
              <li className="nav-item" >
                <NavLink className="nav-link" to="/register" activeClassName="activeLink">register</NavLink>
              </li>
            </React.Fragment>
          }

          {props.isLoggedIn
            ? <li className="nav-item" >
              <NavLink className="nav-link" to="/home" onClick={() => props.onLogin(false)}>logout</NavLink>
            </li>
            : null
          }

        </ul>

      </div>
    </nav>
  )
}
export default Header;