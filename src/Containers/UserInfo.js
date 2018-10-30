import React, { Component } from 'react';
import axios from 'axios'


class UserInfo extends Component {
    state={}
    componentDidMount(){
        const value= this.props.match.params.id;
        console.log(value)
        axios.get(`http://localhost:6969/api/user/${value}`)
        .then(data => {
            this.setState({ userInfo: data.data.userFound, countPerUser:data.data.countPerUser,countAll:data.data.countAll,postPopulate:data.data.postPopulate });
          
        })
        .catch(err => { console.log(err) });

    }
    render() {
        return (
            <div className="userInfo">
                <div className="container">
                    <h3 className="title">{this.state.userInfo ? this.state.userInfo.username: ""}</h3>
                    <div className="avatar"><img src="http://planetstyles.net/demo/milk/3.2/1/download/file.php?avatar=2_1476042631.png"/></div>
                    <div className="row">
                        
                        
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 statistic">
                            <h4 className="h4">User Static</h4>
                            <h4 className="posts">Total Posts: <span>{this.state.countPerUser? this.state.countPerUser:""}</span></h4>
                            <h4 className="statistic">(<span>{(this.state.countPerUser !=null && this.state.countAll!=null)?(this.state.countPerUser *100/this.state.countAll).toFixed(2): "0"}</span>% of all posts)</h4>
                            <h4 className="mostPopular">The most popular post: </h4>
                            <span><a  href={ (this.state.postPopulate && this.state.postPopulate[0] )  ?`http://localhost:3000/detailpost?postId=${this.state.postPopulate[0]._id}`:""}>{(this.state.postPopulate && this.state.postPopulate[0]) ? this.state.postPopulate[0].title :""}</a></span>
                        </div>
                        
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 quote">
                            <h4 className="h4">My Favorite Quote</h4>
                            <p className="quote">{this.state.userInfo ? this.state.userInfo.quote:""}</p>
                        </div>
                        <hr/>
                        
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h4>Joined</h4>
                            <h4 className="joinTime">{this.state.userInfo? this.state.userInfo.createdAt.substring(0,10):""}</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;