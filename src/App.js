import React, { Component } from 'react';
import logo from './logo.svg';
import './CSS/App.css';
import './CSS/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import BreadCrumb from './Components/BreadCrumb';
import Footer from './Components/Footer';
import PostInfo from './Containers/PostInfo';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './Containers/Login';
import Register from './Containers/Register';
import LoginHome from './Components/LoginHome';
import RegisterHome from './Components/RegisterHome';
import Category from './Containers/Category';
class App extends Component {
  state ={
    isAuthenticated: false
  }
  render() {
    
    return (
      <BrowserRouter>
          
            
           <div>

          
            
{/* show post on home page */}
            <Route exact path="/" render ={ props =>{
              return (
                <div className="psychologist">
                    <header className="App-header">
                        <NavBar/>
                    </header> 
                    <Banner/>                       
                    <PostInfo/>
                    {
                      (!this.state.isAuthenticated) ? (<div className="container loginRegister"> 
                                  <div className="row">                            
                                        <LoginHome/>
                                        <RegisterHome/>                           
                                  </div>
                              </div>) : ""
                    }
                    
                    <Footer/>
                </div>
              )
            }}/>
            
{/* link login, register */}
            <Route path='/login' render={ props =>{
              return <Login/>
            }} ></Route>

            <Route path='/register' render={props =>{
              return <Register/>
            }}></Route>
           
{/* link catagory */}    
            <Route path='/category' render={props=>{
              return (
                <div>
                    <NavBar/>
                    <Banner/>
                    <Category/>
                    <Footer/>                                   
                </div>
                
              )
              
            }}></Route>    
           </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
