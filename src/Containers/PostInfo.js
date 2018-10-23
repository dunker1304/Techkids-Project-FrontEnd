import React, { Component } from 'react';

class PostInfo extends Component {
    render() {
        return (
            <div className="postInfo">
                <div className="container">
                    <div className="row">
                        
                        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 post">
                            <h3>Post</h3>
                            <h4 className="title">Title: The Newest Post</h4>
                            <p class="description">Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, when an unknown printer...</p>
                            
                            <a href="/detailpost" className="text-info">read more</a>
                            
                            
                        </div>
                        
                        
                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 statics">
                            <h3>Statics</h3>
                            <h4>Likes</h4>
                            <span className="NumOfLikes">100</span>
                            <h4>View</h4>
                            <span className="NumOfViews">1000</span>
                        </div>
                        
                        
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 infoPost">
                            <h3>Infomation</h3>
                            <span>Catagory: </span> <a href="" className="catagory">Friendship</a> <br/>
                            <span>By author: </span> <a href="" className="author">dunk13</a> <br/>
                            <span>Upload: </span> <span className="time">20-10-2018</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default PostInfo;