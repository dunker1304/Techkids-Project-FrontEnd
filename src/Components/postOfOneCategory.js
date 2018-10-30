import React, { Component } from 'react';
import axios from 'axios';


class postOfOneCategory extends Component {
  state={}
    componentDidMount(){
        let value= this.props.match.params.id;
        console.log(value);
        axios.get(`https://psychologist-backend.herokuapp.com/api/category/${value}`)
        .then(data => {
         this.setState({ post: data.data.item });
         console.log(this.state.post );
        })
        .catch(err => { console.log(err) });
    }



    render() {
        const postAll = this.state.post? this.state.post.map(item=>
            <div className="row">
                        
            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 post">
                <h3>Post</h3>
                <h4 className="title">Title: {item.title}</h4>
                <p class="description">{item.description.substring(0,200)}...</p>
                
                <a href={`/detailpost?postId=${item._id}`} className="text-info">Read more</a>
                
                
            </div>
            
            
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 statics">
                <h3>Statics</h3>
                <h4>Likes</h4>
                <span className="NumOfLikes">{item.like}</span>
                <h4>View</h4>
                <span className="NumOfViews">{item.view}</span>
            </div>
            
            
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 infoPost">
                <h3>Infomation</h3>
                <span>Catagory: </span> <a href={`https://psychologist-frontend.herokuapp.com//category/${item.category._id}`} className="catagory">{item.category.nameCategory}</a> <br/>
                <span>By author: </span> <a href={`https://psychologist-frontend.herokuapp.com//user/${item.author._id}`} className="author">{item.author.username}</a> <br/>
                <span>Upload: </span> <span className="time">{item.createdAt.split("T")[0]}</span>
            </div>
            
        </div>


        ):""
        return (
            <div className="postInfo">
                <div className="container">
                <h4 className="postOfCategory">{this.state.post? this.state.post[0].category.nameCategory : ""}</h4>
                    {postAll}
                </div>
            </div>
        );
    }
}

export default postOfOneCategory;