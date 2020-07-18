import React from 'react'
import registerStyle from "../register/register.css";
import { Link } from 'react-router-dom'

class Register extends React.Component{

    render()
    {
        return(
            <div class="container-fluid" id="login">
            <div class="row">
              <div class="col-lg-10 col-xl-9 mx-auto">
                <div class="card card-signin flex-row my-5">
                  <div class="card-img-left d-none d-md-flex">
                     
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">Login</h5>
                    <form class="form-signin">
                      <div class="form-label-group">
                        <input type="text" id="inputUserame" class="form-control" placeholder="Username" required autofocus />
                        <label for="inputUserame">Username</label>
                      </div>
                      
                      <hr/>
        
                      <div class="form-label-group">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                        <label for="inputPassword">Password</label>
                      </div>
                        
        
                      <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
                      <br/>
                      <div className="text-center">
                        <Link to="/register" className="mx-auto text-primary ">Or Register</Link>
                      </div>

                      <hr class="my-4"/>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Register;