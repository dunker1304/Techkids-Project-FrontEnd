import React, { Component } from 'react'
import '../CSS/post.css'
import Comment from '../Components/Comment'
import iconLike from '../images/like.svg'
import iconView from '../images/view.svg'
export default class Post extends Component {
  render() {
    let post = {
        title : "title of post",
        author : "Nicolai",
        time : Date(),
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        like : 15,
        cmt: [],
        view: 1000
      }
    return (
      <div className="container">
        <div className="row post">
                <p className="h1 text-left">{post['title']}</p>
                <div className="pl-3 pt-2 pr-3">
                <p className="h6 text-left" >By {post['author']}</p>
                <p className="h6 text-left text-black-50" >{post['time']}</p>
                <p> {post['content']}</p>
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
        <div className="row mt-3 ml-2">
            <div className="col-10 " >
              <textarea className="form-control" style={{width: '100%', height: '200px'}} placeholder="Share your opinion">
              </textarea>
            </div>

            <div className="col-2 container-fluid">
              <div className="row mt-5">
                <input type="submit" className="form-control btn btn-primary" value='Like this post!'/>
              </div>
              <div className="row mt-3">
                <input type="submit" className="form-control btn btn-info" value="Share"/>
              </div>
              
            </div>
        </div>
        <div>
          <hr/>
            <Comment/>
          <hr/>
          <hr/>
            <Comment/>
          <hr/>
        </div>
      </div>
    )
  }
}
