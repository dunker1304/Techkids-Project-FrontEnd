import React, { Component } from 'react';

class RegisterHome extends Component {
    render() {
        return (
            <div className="col-sm-6 box-reg">
              <div className="signin-text">
                 <span> Create Account </span>
              </div>
              <p>In order to login you must be registered. Registering takes only a few moments but gives you increased capabilities.
                   The board administrator may also grant additional permissions to registered users. 
                   Before you register please ensure you are familiar with our terms of use and related policies.
                    Please ensure you read any forum rules as you navigate around the board.
              </p>
              <button type="button " id="btnSignUp" className="btn  nutBam" >Register</button>
                
            </div>
        );
    }
}

export default RegisterHome;