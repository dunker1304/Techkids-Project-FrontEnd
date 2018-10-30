import React, { Component } from 'react';
import axios from 'axios'

class Category extends Component {
    state = {

    }

    componentDidMount() {

        axios.get('https://psychologist-backend.herokuapp.com/api/category')
            .then(data => {
                this.setState({ category: data.data.item });
                console.log(this.state.category);
            })
            .catch(err => { console.log(err) });

    }


    render() {

        const allCategory = this.state.category ? this.state.category.map(item =>

            <tr>
                <td className="my-td">
                    <span className="lastpostavatar d-none d-md-block d-lg-block"> <img src="http://www.sitesplat.com/demo/phpBB3/FLATBOOTS//images/folder.png" className="float-md-left" alt="a"></img></span>
                    <i className="fa fa-rss rss-color-forum btn-css pull-right d-none d-sm-block row-icon"></i>
                    <span className="lastsubject desc-wrapper"> <a href={`https://psychologist-frontend.herokuapp.com//category/${item._id}`} > {item.nameCategory}</a></span>
                </td>
                <td className="my-td" >
                    {item.bmark.length}<br />Posts
            </td>
                <td className="my-td" >

                    <div className='container2'>
                        <div className="left">
                        <img src="http://planetstyles.net/demo/milk/3.2/1/download/file.php?avatar=2_1476042631.png" alt="avatar" className='iconDetails  d-none d-md-block d-lg-block' ></img>
                        </div>
                         <div className="right" >
                         <a href ={ item.bmark[item.bmark.length-1] ?`https://psychologist-frontend.herokuapp.com//detailpost?postId=${item.bmark[item.bmark.length-1]._id}` :""} className="lastsubject">  {item.bmark[item.bmark.length-1]?  item.bmark[item.bmark.length-1].title  :""}</a>

                                <div className="abcd">
                                 by <a href = { item.TEST[item.TEST.length-1]?`https://psychologist-frontend.herokuapp.com//user/${item.TEST[item.TEST.length-1]._id}` :""} className="lastauthor">  
                                {item.TEST[item.TEST.length-1]? item.TEST[item.TEST.length-1].username:""}
                                  </a> <br/>
                               {item.bmark[item.bmark.length-1]?item.bmark[item.bmark.length-1].createdAt.split("T")[0]:""}</div>
                                
                            </div>
                     </div>
                     
                     
            </td>
          
        </tr>
                ) : "";
            return (
            <div className="container ">
                    <div className="row ">


                        <div className="col-12 panel panel-default ml-auto mr-auto mt-3">
                            <table className=" table  table-borderd table-white table-primary  my-table ">
                                <thead>
                                    <tr>
                                        <th data-class="expand"> <i class="fa fa-th-list" aria-hidden="true"></i> Main Catogory</th>
                                        <th className=""><i class="fa fa-bar-chart" aria-hidden="true"></i> Statistics</th>
                                        <th className=""><i class="fa fa-comments-o" aria-hidden="true"></i> Last Post</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allCategory}



                                </tbody>
                            </table>

                        </div> {/* end panel */}

                    </div>
                </div>
                );
            }
        }
        
export default Category;