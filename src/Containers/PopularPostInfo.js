import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from 'query-string';
class PopularPostInfo extends Component {
    state={
        itemsPerPage: 1
    }


    componentDidMount(){
        const values = queryString.parse(this.props.location.search);
        //console.log(this.props.location);
        axios.get(`http://localhost:6969/api/post/popularpost?page=${values.page? values.page : 1 }`)
            .then(data=>{
                this.setState({Posts: data.data.post,
                });
                
            })
            .catch(error=>{
                console.log(error);
            })
    }
    
    /*handleClick = (event) => {
        
        this.setState({
            currentPage: Number(event.target.id)
        });
        
    }*/

    render() {
        
        const{Posts, itemsPerPage} = this.state;
        console.log(Posts);
        
        // all page 
        const pageNumbers = [];
        for(let i = 1;i<=Math.ceil(7/itemsPerPage);i++){
            pageNumbers.push(i);
        }

        // render page show on homepage
        const values = queryString.parse(this.props.location.search);
        const currentPage = values.page || 1;
        const showPageNumbers = [];
        if(+currentPage -2 >= 1 && +currentPage +2 <= pageNumbers.length){
            for(let i= +currentPage-2;i<= +currentPage+2;i++){
                showPageNumbers.push(i);
            }
        }
        else if(currentPage == 2){
            for(let i= +currentPage-1;i<= +currentPage+3;i++){
                showPageNumbers.push(i);
            }
        }
        else if(currentPage == 1){
            for(let i= 1;i<= +currentPage+4;i++){
                showPageNumbers.push(i);
            }
        }
        else if(currentPage == pageNumbers.length - 1){
            for(let i= +currentPage-3;i<= +currentPage+1;i++){
                showPageNumbers.push(i);
            }
        }
        else if(currentPage == pageNumbers.length){
            for(let i= +currentPage-4;i<= +currentPage;i++){
                showPageNumbers.push(i);
            }
        }
        
        const renderPageNumbers = showPageNumbers.map(number => {
            return (
              <li>
                <a key={number} id={number} className={(currentPage==number)? "active":""}
                href={`http://localhost:3000?page=${number}`}
                >
                    {number}
                </a>
                
              </li>
            );
          });


        // print all post in one page
        const allPost = this.state.Posts ? this.state.Posts.map(item=>
            <div className="row">

                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 post sidebar-box">
                    <h3>Post</h3>
                    <h4 className="title">Title: {item.title}</h4>
                    <p class="description">{item.description}</p>
                    <div className="read-more">
                        <a href={`http://localhost:3000/detailpost?postId=${item._id}`} >Read more...</a>  
                    </div>
                    
                    
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
                    <span>Catagory: </span> <a href="" className="catagory">{item.category.nameCategory}</a> <br/>
                    <span>By author: </span> <a href="" className="author">{item.author.username}</a> <br/>
                    <span>Upload: </span> <span className="time">{item.createdAt}</span>
                </div>
                
            </div>
            ): "";
            
        return (
            
            <div className="postInfo">
                <div className="container">
                <h3>Popular Post</h3>
                    {allPost}
                    
                    <ul className="page-numbers">
                    <li><a className={`firstPage ${(queryString.parse(this.props.location.search).page == 1)? 'disabled': ''}`} href={`http://localhost:3000?page=1`} 
                    >First</a></li>
                        {renderPageNumbers}
                    <li><a className={`lastPage ${(queryString.parse(this.props.location.search).page == pageNumbers.length)? 'disabled': ''}`} href={`http://localhost:3000?page=${pageNumbers.length}`}>Last</a></li>
                    </ul>
                    
                    
  
                </div>
            </div>
        );
    }
}

export default PopularPostInfo;