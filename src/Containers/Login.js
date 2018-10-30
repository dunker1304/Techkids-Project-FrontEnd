import React, { Component } from 'react';
import axios from 'axios';

import { withRouter } from 'react-router-dom'

class Login extends Component {
    state = {
        username: '',
        password: '', 
        nameWrong: false,
        passWrong:false
    }

    handlerChangeInput = (event) => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }
  handlerOnSubmit=(event)=>{
            event.preventDefault();
            axios({
                method: 'post',
                url: "https://psychologist-backend.herokuapp.com/api/auth/login",
                data: {
                  
                username: this.state.username,
                password: this.state.password
                }
                ,
                withCredentials:true
                
              })
              .then(response=>{
                  console.log(response)
                const values = (this.props.location.search).replace("?path=","");
             
                sessionStorage.setItem('status','loggedIn') ;
                sessionStorage.setItem('id', response.data._id);
                sessionStorage.setItem('username', response.data.username);

                
                values? this.props.history.push(`${values}`) : this.props.history.push(`/`)
               
              })
              .catch (err=>{
                if  (err.response.status===402) {
                    this.setState({passWrong:true,nameWrong:false});
                }
                     else this.setState({nameWrong:true})
               });
         }
    
    
    render() {
        return (
            <div className="wrapper fadeInDown">
                <div className="formContent">   
                    <div className="fadeIn first">
                        <img src="http://www.thingswedontknow.com/img/doo/psychology.png" id="icon" alt="User Icon" />
                        <h1>Log In</h1>
                    </div>

                    <form  onSubmit={this.handlerOnSubmit}>  
                        <input onChange={this.handlerChangeInput} type="text" id="login" value={this.state.username} className="fadeIn second" name="username" placeholder="Username" />
                         {this.state.nameWrong? <p>Username wrong</p> : ""} 
                        <input onChange={this.handlerChangeInput} type="password" id="password" value={this.state.password} className="fadeIn third" name="password" placeholder="Password" />
                        {this.state.passWrong? <p>Password wrong</p> : ""} 
                        <div className="form-check fadeIn third">
                            <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                            <label for="remember" className="form-check-label" id="lbal"> Remember Me</label>
                        </div>
                        <input type="submit" value="Log In" className="btn" />
                        <a href="/" className="forgot-password">
                        Forgot the password?
                        </a>
                    </form>
                   

                    <div className="formFooter">
                        <a className="underlineHover" href="/register">Sign Up</a>

                    </div>
                </div> {/*-- end formContent--*/}


            </div>
        );
    }
}

export default withRouter(Login);