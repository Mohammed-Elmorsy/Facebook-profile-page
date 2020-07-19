import React from 'react'
import registerStyle from "./register.css";
import CoursesDropDown from "./coursesList";
import axios from 'axios';
import { Link } from 'react-router-dom'
import baseURL from '../../baseURL'

class Register extends React.Component{

  createStudent = () => {

    let student = {
      fullName:this.refs.fullName.value,
      email:this.refs.email.value,
      password:this.refs.password.value
    }
    
    axios.post(baseURL+"/students/addStudent", student )
    .then(res => console.log(res))
    .catch(err => console.log("add student error "+err))
    
  }

    render()
    {
        return(
            <div class="container-fluid" id="register">
            <div class="row">
              <div class="col-lg-10 col-xl-9 mx-auto">
                <div class="card card-signin flex-row my-5">
                  <div class="card-img-left d-none d-md-flex">
                     
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">Register</h5>
                    <form class="form-signin">
                      <div class="form-label-group">
                        <input type="text" ref="fullName"  id="inputUserame" class="form-control" placeholder="Full Name" required autofocus />
                        <label for="inputUserame">Full Name</label>
                      </div>
        
                      <div class="form-label-group">
                        <input type="email" ref="email" id="inputEmail" class="form-control" placeholder="Email address" required />
                        <label for="inputEmail">Email address</label>
                      </div>
                      
                      <hr/>
        
                      <div class="form-label-group">
                        <input type="password" ref="password" id="inputPassword" class="form-control" placeholder="Password" required />
                        <label for="inputPassword">Password</label>
                      </div>
                      
                      <div class="form-label-group">
                        <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required />
                        <label for="inputConfirmPassword">Confirm password</label>
                      </div>
                      <div class="form-label-group">
                        <CoursesDropDown/>
                      </div>
                        
        
                      <button class="btn btn-lg btn-primary btn-block text-uppercase" 
                        type="button" onClick={this.createStudent}>Register
                      </button>
                      <br/>
                      <div className="text-center">
                        <Link to="/login" className="mx-auto text-primary ">Or Login</Link>
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