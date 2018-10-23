import React, { Component } from 'react'
import '../CSS/Comment.css'
import iconBoy from '../images/boy.svg'
export default class Comment extends Component {
  render() {
    return (
      <div className="row mt-3 comment">                        
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-10 mt-3 post">
              <p class="content">Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
              since the 1500s, when an unknown printer...</p>
          </div>
          
          <div class="col-xs-3 col-sm-3 col-md-2 col-lg-2 justify-content-center  infoPost">
              <img className="text-center" src={iconBoy} /> <br/>
              <span>By author: </span> <a href="" className="author text-center">dunk13</a> <br/>
              <span>Upload: </span> <span className="time text-center">20-10-2018</span>
          </div>
      </div>
    )
  }
}
