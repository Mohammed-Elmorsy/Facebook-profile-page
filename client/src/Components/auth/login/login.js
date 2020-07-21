import React from 'react'
import registerStyle from "../register/register.css";
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../baseURL'

class Login extends React.Component{
  state={
    userName:'',
    password:'',
    isLoggedIn: this.props.isLoggedIn
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post(baseURL+'/login', this.state)
    .then(res => {
      console.log('response  '+ JSON.stringify(res) )
      if(res.data.message === 'authorized user'){
        this.props.onLogin(true);
        console.log( this.state.isLoggedIn)
        this.props.history.push('/profile');
      }
      else if(res.data.message === 'unauthorized user'){
        alert('invalid username or password');
      }


    })
    .catch(err => {
      console.log(err);
      alert('server error');
  
    })
  }


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
                    <form class="form-signin" onSubmit={this.handleSubmit}>
                      <div class="form-label-group">
                        <input type="text" id="userName" class="form-control" 
                        placeholder="Username" required autofocus 
                        onChange={this.handleChange} />
                        <label for="userName">Username</label>
                      </div>
                      
                      <hr/>
        
                      <div class="form-label-group">
                        <input type="password" id="password" class="form-control" 
                        placeholder="Password" required
                        onChange={this.handleChange} />
                        <label for="password">Password</label>
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

export default withRouter(Login);