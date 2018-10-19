import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="wrapper fadeInDown">
                <div className="formContent">
                    <div className="fadeIn first">
                        <img src="http://www.thingswedontknow.com/img/doo/psychology.png" id="icon" alt="User Icon" />
                        <h1>Log In</h1>
                    </div>

                    <form  >
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username" />
                        <input type="password" id="password" className="fadeIn third" name="password" placeholder="Password" />
                        <div className="form-check fadeIn third">
                            <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                            <label for="remember" className="form-check-label" id="lbal"> Remember Me</label>
                        </div>
                        <input type="Submit" value="Log In" className="btn" />
                        <a href="#" className="forgot-password">
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

export default Login;