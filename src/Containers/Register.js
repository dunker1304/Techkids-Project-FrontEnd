import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

class Register extends Component {
    state = {
        username: '',
        password: '',
        re_password:'',
        isEqual: true,
        isStatus:true
    }

    handlerChangeInput = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }



    handlerOnSubmit = (event) => {
        event.preventDefault();
      if ( this.state.password!== this.state.re_password) {
        this.setState({isEqual:false})
       
      } 
      else this.setState({isEqual:true});
        axios.post("https://psychologist-backend.herokuapp.com/api/user", {
            username: this.state.username,
            password: this.state.password,
            re_password :this.state.re_password
          
        })
            .then(response => {
                this.setState({isStatus:true})
                console.log(this.state.isStatus)
                this.props.isAuthenticated();
                 this.props.history.push('https://psychologist.herokuapp.com');

            })
            .catch(err => { 
                this.setState({isStatus:false})  
            });
        
    }

    render() {
        return (
            <div className="container abc ">
                <div className="row ">

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 contentRegister fadeInDown">
                            <div className="content ">
                                <div className="modal-header fadeIn first">

                                    <h4 className="title">
                                        Create an account
                                </h4>

                                </div>
                                <div className="modal-body ">
                                    <form novalidate="novalidate" id="formSignUp" onSubmit= {this.handlerOnSubmit}>

                                        <div className="form-group fadeIn second">
                                            <label className="control-label label" for="username">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                                                </div>
                                                <input type="text" onChange={this.handlerChangeInput} className="form-control" placeholder="Username"
                                                    aria-label="username" aria-describedby="basic-addon1" name="username" />
                                            </div>
                                        </div>
                                        {!this.state.isStatus? <p className="infoError">Username has already existed</p> :""}

                                        <div className="form-group fadeIn third">
                                            <label className="control-label" for="password">Password</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i class="fa fa-lock" aria-hidden="true"></i></span>
                                                </div>
                                                <input type="password" onChange={this.handlerChangeInput} className="form-control" placeholder="Password"
                                                    aria-label="password" aria-describedby="basic-addon1" name="password" />
                                            </div>
                                        </div>
                                        <div className="form-group fadeIn fourth">
                                            <label className="control-label" for="re_password">Re_Password</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i class="fa fa-lock" aria-hidden="true"></i></span>
                                                </div>
                                                <input type="password" onChange={this.handlerChangeInput} className="form-control" placeholder="Re_Password"
                                                    aria-label="re_password" aria-describedby="basic-addon1" name="re_password" />
                                            </div>
                                             {!this.state.isEqual ? <p className="infoError"> password and repassword not equal</p>:""}
                                        </div>

                                        <div className="form-check fadeIn fourth">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="accepted" />
                                            <label className="form-check-label accept" for="exampleCheck1">I have read and accepted  <a target="_blank" href="/" className="accept">the terms and conditions of use.</a></label>
                                        </div>

                                        <input type="submit" id="btnSignUp" className="btn btn-primary fadeIn fourth nutBam" value="Create an account "></input>
                                    </form>

                                </div>
                                <div className="modal-footer fadeIn fourth">
                                    <small>Already a member? <a className="alreadySignUp" href="/login">Login here</a></small>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default withRouter(Register);