import React, { Component } from 'react'
import '../CSS/Comment.css'
import iconBoy from '../images/boy.svg'
export default class Comment extends Component {
  render() {
    console.log(this.props.info);
    return (
      
      <div className="row mt-3 comment">                        
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-10 mt-3 post">
              <p class="content">{this.props.info.content}</p>
          </div>
          
          <div class="col-xs-3 col-sm-3 col-md-2 col-lg-2 justify-content-center  infoPost">
              <img className="text-center" src={iconBoy} /> <br/>
              <span>By author: </span> <a href="" className="author text-center">{this.props.info.author.username}</a> <br/>
              <span>Upload: </span> <span className="time text-center">{this.props.info.createdAt}</span>
          </div>
      </div>
      
    )
  }
}
