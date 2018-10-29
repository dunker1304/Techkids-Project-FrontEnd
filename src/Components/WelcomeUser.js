import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
class WelcomeUser extends Component {
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
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
            <div className="welcome">
                <span>Welcome, </span>
                <i className="fa fa-user-circle"></i>
                <button onClick={this.showMenu}>
                    User
                    <i className="fa fa-caret-down"></i>
                </button>
                
                {
                this.state.showMenu
                    ? (
                    <div
                        className="menu"
                        ref={(element) => {
                        this.dropdownMenu = element;
                        }}
                    >
                        <button><a href="/user" className="profile">Profile</a></button>
                        <button><a href="/logout" className="logout">Log Out</a></button>
                        
                    </div>
                    )
                    : (
                    null
                    )
                }
            </div>
        );
    }
}

export default WelcomeUser;