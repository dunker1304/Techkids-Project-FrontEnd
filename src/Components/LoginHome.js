import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
class LoginHome extends Component {

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
                url: "http://localhost:6969/api/auth/login",
                data: {
                  
                username: this.state.username,
                password: this.state.password
                }
                ,
                withCredentials:true
                
              })
              .then(response=>{
                  console.log(response)
            
             
                sessionStorage.setItem('status','loggedIn') ;
                sessionStorage.setItem('id', response.data._id);
                sessionStorage.setItem('username', response.data.username);

                
            this.props.history.push(`/`);
               
              })
              .catch (err=>{
                  console.log(err.response)
                if  ( err.response && err.response.status===402) {
                    this.setState({passWrong:true,nameWrong:false});
                }
                     else this.setState({nameWrong:true})
               });
         }
    
    render() {
        return (
            <div className="col-sm-6">
                <div className="signin-text">
                    <span>Sign In Onto your account</span>
                </div>
                <form  onSubmit={this.handlerOnSubmit}>

                    <div className="form-group ">
                       
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" value={this.state.username}
                                onChange={this.handlerChangeInput}  aria-label="username"  name="username" />
                                
                        </div>
                        {this.state.nameWrong? <p>Username wrong</p> : ""} 
                    </div>

                    <div className="form-group">
                       
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock" aria-hidden="true"></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password}
                               onChange={this.handlerChangeInput} aria-label="password" aria-describedby="basic-addon1" name="password" /> 
                              
                        </div>
                        {this.state.passWrong? <p>Password wrong</p> : ""} 
                    </div>
                    <div className="form-check pull-left">
                            <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                            <label htmlFor="remember" className="form-check-label" id="lbal"> Remember Me</label>
                     </div>

                    <button type="submit " id="btnSignUp" className="btn btn-primary nutBam"  >Log me in</button>
                </form>

            </div>
        );
    }
}

export default withRouter(LoginHome);