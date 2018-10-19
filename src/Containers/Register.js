import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="container abc ">
                <div className="row ">
                    <div className=" col-md-5  contentRegister fadeInDown">
                        <div className="content ">
                            <div className="modal-header fadeIn first">

                                <h4 className="title">
                                    Create an account
                                </h4>
                             
                            </div>
                            <div className="modal-body ">
                                <form novalidate="novalidate" id="formSignUp">

                                    <div className="form-group fadeIn second">
                                        <label className="control-label label" for="username">Username</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Username"
                                                aria-label="username" aria-describedby="basic-addon1" name="username" />
                                        </div>
                                    </div>

                                    <div className="form-group fadeIn third">
                                        <label className="control-label" for="password">Password</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i class="fa fa-lock" aria-hidden="true"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Password"
                                                aria-label="password" aria-describedby="basic-addon1" name="password" />
                                        </div>
                                    </div>
                                    <div className="form-group fadeIn fourth">
                                        <label className="control-label" for="re_password">Re_Password</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i class="fa fa-lock" aria-hidden="true"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Re_Password"
                                                aria-label="re_password" aria-describedby="basic-addon1" name="re_password" />
                                        </div>
                                    </div>

                                    <div className="form-check fadeIn fourth">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" name="accepted" />
                                        <label className="form-check-label accept" for="exampleCheck1">I have read and accepted  <a target="_blank" href="#" className="accept">the terms and conditions of use.</a></label>
                                    </div>

                                    <button type="submit " id="btnSignUp" className="btn btn-primary fadeIn fourth nutBam" >Create an account</button>
                                </form>

                            </div>
                            <div className="modal-footer fadeIn fourth">
                                <small>Already a member? <a className="alreadySignUp" href="#">Login here</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;