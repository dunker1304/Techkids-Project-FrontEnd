import React, { Component } from 'react'
import '../CSS/post.css'
import Comment from '../Components/Comment'
import iconLike from '../images/like.svg'
import iconView from '../images/view.svg'
import queryString from 'query-string';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class Post extends Component {
state={
  
} 

  
  componentDidMount(){
    const values = queryString.parse(this.props.location.search);
    //console.log(values.postId);
    axios({
      method: 'PUT',
      url: `http://localhost:6969/api/post/detailpost?postId=${values.postId}`,
      data: {
      }
      ,
      withCredentials:true
      
    })
    .then(data=>{
        console.log(data);
      //window.location.reload();  // VERY IMPORTANT
                
      })
    .catch(error=>{
        console.log(error);
        })


    axios.get(`http://localhost:6969/api/post/detailpost?postId=${values.postId}`)
        .then(data=>{
            this.setState({post: data.data.post,
            });
           
        })
        .catch(error=>{
            console.log(error);
        });
    
    
  }

  handleTextChange = (event) => {
    const { value, name } = event.target;
    this.setState({[name]: value});
  }

  handleLike = (event) =>{
    const values = queryString.parse(this.props.location.search);
    
    axios({
      method: 'PUT',
      url: `http://localhost:6969/api/post/likedBy?postId=${values.postId}`,
      data: {
      }
      ,
      withCredentials:true
      
    })
            .then(data=>{
                console.log(data);
                window.location.reload();  // VERY IMPORTANT
                
            })
            .catch(error=>{
                console.log(error);
                const value=this.props.location.pathname + this.props.location.search;
               
                this.props.history.push(`/login?path=${value}`);
            })
  }  
  handleAddComment=(event) =>{
    event.preventDefault();
    const values = queryString.parse(this.props.location.search);
    
    axios({
      method: 'PUT',
      url: `http://localhost:6969/api/post/addComment?postId=${values.postId}`,
      data: {
        textArea : this.state.textArea,

      }
      ,
      withCredentials:true
      
    })
            .then(data=>{
                console.log(data);
                window.location.reload();  // VERY IMPORTANT
                
            })
            .catch(error=>{
                console.log(error);
                const value=this.props.location.pathname + this.props.location.search;
               
                this.props.history.push(`/login?path=${value}`);
            })
  }
  render() {
    const {post} = this.state;
    
    const comments = this.state.post? this.state.post.comment.map(comment =>
        <div>
            <hr/>
            <Comment info={comment}/>
            <hr/>
        </div>
        
      ):"";
    
    
    return (
      this.state.post?
      <div className="container">
        <div className="row post">
                <p className="h1 text-left">{post.title}</p>
                <div className="pl-3 pt-2 pr-3">
                <p className="h6 text-left" >By {post.author.username}</p>
                <p className="h6 text-left text-black-50" >{post.createdAt}</p>
                <p> {post.description}</p>
                <div id = "likeview">
                  <table>
                    <tr>
                        <th><img src= {iconLike} className="iconLike"/></th>
                        <th><img src= {iconView} className="iconView"/></th>
                    </tr>
                    <tr>
                        <td> <p>{post.like}</p></td>
                        <td> <p>{post.view}</p></td>
                    </tr>
                  </table>
                </div>
  
                </div>
        </div>
        <hr/>
        <form onSubmit={this.handleAddComment}>
        <div className="row mt-3 ml-2">
            <div className="col-10 " >
              <textarea name="textArea" required onChange={this.handleTextChange} className="form-control" style={{width: '100%', height: '200px'}} placeholder="Share your opinion">
              </textarea>
            </div>

            <div className="col-2 container-fluid">
              <div className="row mt-5">
                <input onClick={this.handleLike} type="button" className="form-control btn btn-primary" value='Like this post!'/>
              </div>
              <div className="row mt-3">
                <input  type="submit" className="form-control btn btn-info" value="Share"/>
              </div>
              
            </div>
        </div>
        </form>
        
        <div>
          
          {comments}
        </div>
      </div>
      :''
    )
  }
}
export default withRouter(Post);