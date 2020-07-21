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
      userName:this.refs.userName.value,
      email:this.refs.email.value,
      password:this.refs.password.value
    }
    
    axios.post(baseURL+"/register", student )
    .then(res => {
      console.log(res)
      if(res.data.message === 'username already exists'){
        alert('username already exists');
      }
      else if(res.data.message === 'email already exists'){
        alert('email already exists');
      }
      else{
        alert('you registered successfully!');
      }
      
    })
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
                        <input type="text" ref="fullName"  id="inputFullname" class="form-control" placeholder="Full Name" required autofocus />
                        <label for="inputFullname">Full Name</label>
                      </div>
                      <div class="form-label-group">
                        <input type="text" ref="userName"  id="inputUserame" class="form-control" placeholder="Full Name" required autofocus />
                        <label for="inputUserame">User Name</label>
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
                        <Link to="/login" className="text-primary ">Or Login</Link>
                      </div>
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