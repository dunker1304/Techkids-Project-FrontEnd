import React, { Component } from 'react';

class Category extends Component {
    state={
     now: new Date()
    }

    componentDidMount(){
           setInterval(()=>{
                const now= new Date();
                this.updateTime(now);
           },1000)

    }
    updateTime=(time)=>{
        this.setState ({now:time})
    }
    
    render() {
        return (
            <div className="container ">
               <div className="row ">
                 
                  <div className="col-12 ml-auto mr-auto">
                    {this.state.now.toUTCString}
                     <span className="time pull-right"> <i class="fa fa-clock-o" aria-hidden="true"></i> It's currently {this.state.now.toDateString()}</span>
                  </div>
                  <div className="col-12 panel panel-default ml-auto mr-auto">
                     <table className=" table  table-borderd table-white table-primary  my-table ">
                        <thead>
                            <tr>
                                <th data-class="expand"> <i class="fa fa-th-list" aria-hidden="true"></i> Main Catogory</th>
                                <th className=""><i class="fa fa-bar-chart" aria-hidden="true"></i> Statistics</th>
                                <th className=""><i class="fa fa-comments-o" aria-hidden="true"></i> Last Post</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            <tr  >
                             
                                <td  className="my-td">
                                
                                  <span className="forum-image"> <img src="http://www.sitesplat.com/demo/phpBB3/FLATBOOTS//images/folder.png"/></span>
                                   <i className="fa fa-rss rss-color-forum btn-css pull-right hiddlen-xs hidden-md row-icon"></i>
                                  <span className="desc-wrapper"> <a href=""> Relationshipsddddddddddddddddddddddđ</a></span> 
                                 
                                </td>
                                <td className="my-td" >
                                    100 <br/>Posts
                                </td>
                                <td className="my-td" >
                                    <div className="lastpost ">
                                     <span className="lastpostavatar ">
                                      <img src="http://planetstyles.net/demo/milk/3.2/1/download/file.php?avatar=2_1476042631.png" alt="avatar" className="float-md-left"></img>
                                     </span>
                                     <div className=" info">
                                       <a href="" className="lastsubject"> You are the apple of my eye</a>
                                       <br/> by <a href="" className="lastauthor">Kieu Quynh</a>
                                       <br/> We Oct 17, 2018 3:45 PM
                                      </div>
                                    </div>
                                </td>
                              
                            </tr>

                                 <tr >
                             
                             <td className="my-td" >
                             
                               <span className="forum-image"> <img src="http://www.sitesplat.com/demo/phpBB3/FLATBOOTS//images/folder.png" /></span>
                                <i className="fa fa-rss rss-color-forum btn-css pull-right hiddlen-xs hidden-md row-icon"></i>
                               <span className="desc-wrapper"> <a href=""> Relationshipsddddddddddddddddddddddđ</a></span> 
                              
                             </td>
                             <td className="my-td">
                                 100 <br/> Posts
                             </td>
                             <td className="my-td">
                                 <div className="lastpost">
                                  <span className="lastpostavatar">
                                   <img src="http://planetstyles.net/demo/milk/3.2/1/download/file.php?avatar=2_1476042631.png" alt="avatar" className="float-md-left"></img>
                                  </span>
                                  <div className=" info">
                                  <a href="" className="lastsubject"> You are the apple of my eye</a>
                                   <br/> by <a href="" className="lastauthor">Kieu Quynh</a>
                                   <br/> We Oct 17, 2018 3:45 PM
                                   </div>
                                 </div>
                             </td>
                           
                         </tr>
                     
                        </tbody>
                     </table>

                  </div> {/* end panel */}
              
               </div>
            </div>
        );
    }
}

export default Category;