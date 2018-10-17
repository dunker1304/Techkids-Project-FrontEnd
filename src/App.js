import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import BreadCrumb from './Components/BreadCrumb';
import Footer from './Components/Footer';
import PostInfo from './Containers/PostInfo';
class App extends Component {
  render() {
    return (
      <div className="psychologist">
        <header className="App-header">
            <NavBar/>
        </header>
        <Banner/>
        <BreadCrumb/>
        <PostInfo/>
        <Footer/>
      </div>
    );
  }
}

export default App;
