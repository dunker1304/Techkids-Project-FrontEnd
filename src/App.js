import React, { Component } from 'react';
import './CSS/App.css';
import './CSS/Login.css';
import './CSS/UserInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import NewPostInfo from './Containers/NewPostInfo';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './Containers/Login';
import Register from './Containers/Register';
import LoginHome from './Components/LoginHome';
import RegisterHome from './Components/RegisterHome';
import Category from './Containers/Category';
import UserInfo from './Containers/UserInfo';
import DetailPost from './Containers/DetailPost'
import NewPost from './Components/NewPost'
import PostOfOneCategory from './Components/postOfOneCategory';
import PopularPostInfo from './Containers/PopularPostInfo';
import axios from 'axios';
class App extends Component {
state={

}
  changeAuthenticated=()=>{
   
    const token= sessionStorage.getItem("status");
    console.log(token);
    if(!token ) return false;
    else return true;
  }

  componentDidMount(){
    axios.get('http://localhost:6969/api/post')
          .then(data=>{
            
              this.setState({
                NumberOfPosts: data.data.NumberOfPosts
              })
              console.log(this.state.NumberOfPosts);
          })
          .catch(error =>{
            console.log(error);
          })
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
                                          
                    <NewPostInfo NumberOfPosts={this.state.NumberOfPosts} {...props}/>
                    
                    <PopularPostInfo NumberOfPosts={this.state.NumberOfPosts} {...props}/>
                    {
                      (!this.changeAuthenticated()) ? (<div className="container loginRegister"> 
                                  <div className="row">                            
                                        <LoginHome/>
                                        <RegisterHome/>                           
                                  </div>
                              </div>) : ""
                    }
                    
                    <Footer NumberOfPosts={this.state.NumberOfPosts} {...props}/>
                </div>
              )
            }}/>
            
{/* link login, register */}
            <Route path='/login' render={ props =>{
              return <Login isAuthenticated={this.changeAuthenticated}></Login>
            }} ></Route>

            <Route path='/register' render={props =>{
              return <Register/>
            }}></Route>
           
{/* link catagory */}    
            <Route exact path='/category' render={props=>{
              return (
                <div>
                    <header className="App-header">
                        <NavBar/>
                    </header>
                    <Banner/>
                    <Category/>
                    <Footer NumberOfPosts={this.state.NumberOfPosts} {...props}/>                                   
                </div>
                
              )
              
            }}></Route> 

{/* link catagory/:id */}    
            <Route exact path='/category/:id' render={props=>{
              return (
                <div>
                    <header className="App-header">
                        <NavBar/>
                    </header>
                    <Banner/>
                    <PostOfOneCategory {...props}/>
                    <Footer NumberOfPosts={this.state.NumberOfPosts} {...props}/>                                   
                </div>
                
              )
              
            }}></Route> 

{/* link User Infomation*/}
              <Route exact path="/user/:id" render={props=>{
                return(
                  <div>
                      <header className="App-header">
                        <NavBar/>
                      </header>
                      <Banner/>
                      <UserInfo {...props}/>
                      <Footer NumberOfPosts={this.state.NumberOfPosts} {...props}/> 
                        
                  </div>
                  
                )
              }}>
              </Route> 

{/* Link post    */}
            <Route path="/detailpost/" render={props =>{
              return (
                <div>
                <header className="App-header">
                        <NavBar/>
                </header> 
                <Banner/>
                <DetailPost {...props} />
                <Footer NumberOfPosts={this.state.NumberOfPosts} {...props}/>  
              </div>
              )
                
                }}></Route>
              
{/* Link NewPost    */}
            <Route path="/newpost" render={props =>{
              return (
                <div>
                <header className="App-header">
                        <NavBar/>
                </header> 
                <Banner/>
                <NewPost  {...props}/>
                <Footer NumberOfPosts={this.state.NumberOfPosts} {...props}/>  
              </div>
              )
                
                }}></Route>
                
           </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
