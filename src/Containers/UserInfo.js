import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div className="userInfo">
                <div className="container">
                    <h3 className="title">About UserName</h3>
                    <div className="avatar"></div>
                    <div className="row">
                        
                        
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 statistic">
                            <h4 className="h4">User Static</h4>
                            <h4 className="posts">Total Posts: <span>5</span></h4>
                            <h4 className="statistic">(<span>0.1</span>% of all posts)</h4>
                            <h4 className="mostPopular">The most popular post: </h4>
                            <span><a href="">Title Of The Most Popular Post</a></span>
                        </div>
                        
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 quote">
                            <h4 className="h4">My Favorite Quote</h4>
                            <p className="quote">Not All Heroes Wear Capes</p>
                        </div>
                        <hr/>
                        
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h4>Joined</h4>
                            <h4 className="joinTime">25 May 2018, 18:28</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;