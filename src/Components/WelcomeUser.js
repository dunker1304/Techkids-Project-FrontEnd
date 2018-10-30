import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../CSS/WelcomeUser.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
class WelcomeUser extends Component {
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    handleLogout=(event)=>{
        event.preventDefault();
        axios({
            method: 'delete',
            url: 'http://localhost:6969/api/auth/logout',
            data: {
            }
            ,
            withCredentials:true
            
          })
          .then(data=>{
            console.log(data);
            sessionStorage.removeItem('status');
            this.props.history.push(`/`);
           
          })
          .catch (err=>{
            console.log(err);
           });
      
    }

    showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu(event) {
        
        if (!this.dropdownMenu.contains(event.target)) {
          
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
          
        }
    }


    render() {
        return (
            
            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <div className="welcome">
                    <span>Welcome, </span>
                    <i className="fa fa-user-circle"></i>
                    <span onClick={this.showMenu}>
                       {sessionStorage.getItem("username")}
                        <i className="fa fa-caret-down"></i>
                    </span>
                    
                    {
                    this.state.showMenu
                        ? (
                        <div
                            className="menudrop"
                            ref={(element) => {
                            this.dropdownMenu = element;
                            }}
                        >   
                            <div className="square"></div>
                            <ul>
                                <li><a href={`/user/${sessionStorage.getItem("id")}`} className="profile">Profile</a></li>
                                <hr/>
                                <li><a href="" onClick={this.handleLogout} className="logout">Log Out</a></li>
                            </ul>
                                                       
                           
                        </div>
                        )
                        : (
                        null
                        )
                    }
                </div>
            </div>
            
            
        );
    }
}

export default withRouter(WelcomeUser);