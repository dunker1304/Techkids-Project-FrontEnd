import React, { Component } from 'react';

class LoginHome extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="signin-text">
                    <span>Sign In Onto your account</span>
                </div>
                <form >

                    <div className="form-group ">
                       
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username"
                                aria-label="username" aria-describedby="basic-addon1" name="username" />
                        </div>
                    </div>

                    <div className="form-group">
                       
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i class="fa fa-lock" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Password"
                                aria-label="password" aria-describedby="basic-addon1" name="password" />
                        </div>
                    </div>
                    <div className="form-check pull-left">
                            <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                            <label for="remember" className="form-check-label" id="lbal"> Remember Me</label>
                     </div>

                    <button type="submit " id="btnSignUp" className="btn btn-primary nutBam" >Log me in</button>
                </form>

            </div>
        );
    }
}

export default LoginHome;