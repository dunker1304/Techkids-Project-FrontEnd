import React, { Component } from 'react';
import '../CSS/Comment.css';
import iconBoy from '../images/boy.svg';
import axios from 'axios';
export default class Comment extends Component {
  state={

  }
  componentDidMount(){
    axios.get(`https://psychologist-backend.herokuapp.com/api/user/comment?userId=${this.props.info.author}`)
        .then(data=>{
            this.setState({user: data.data,
            });
           
        })
        .catch(error=>{
            console.log(error);
        });
  }
  render() {
    console.log(this.state.user);
    return (
      
      <div className="row mt-3 comment">                        
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-10 mt-3 post">
              <p class="content">{this.props.info.content}</p>
          </div>
          
          <div class="col-xs-3 col-sm-3 col-md-2 col-lg-2 justify-content-center  infoPost">
              <img className="text-center" src={iconBoy} alt="ava"/> <br/>
              <span>By author: </span> <a href="/" className="author text-center">{this.state.user.username}</a> <br/>
              <span>Upload: </span> <span className="time text-center detailpost">{this.props.info.createdAt.substring(0,10)}</span>
          </div>
      </div>
      
    )
  }
}
