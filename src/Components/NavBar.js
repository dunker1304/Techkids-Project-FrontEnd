import React, {Component} from 'react';


class NavBar extends Component{
    render(){
        return(
            <div className="container">
                <div class="row">                    
                    
                    <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 navbar-left">

                        <h1 className="logo">Psychologist</h1>
                        <a href="/" className="homePage">Home</a>
                        <a href="/category" className="category">Catagories</a>
                    </div>
                    
                    <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 navbar-right">
                        <a href="/register" className="register">Register</a>
                        <a href="/login" className="login">Login</a>
                    </div>
                 
                    
                    
                    
                </div>                
            </div>
        )
    }
    
}

export default NavBar;