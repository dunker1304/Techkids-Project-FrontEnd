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
                 
                  <div className="col-10 ml-auto mr-auto">
                    {this.state.now.toUTCString}
                     <span className="time pull-right"> <i class="fa fa-clock-o" aria-hidden="true"></i> It's currently {this.state.now.toUTCString()}</span>
                  </div>
                  <div className="col-10 panel panel-default ml-auto mr-auto">
                     <table className="footable table table-striped table-borderd table-white table-primary table-hover footable-loaded tablet">
                        <thead>
                            <tr>
                                <th data-class="expand" className="footable-visible footable-first-column"> <i class="fa fa-th-list" aria-hidden="true"></i> Main Catogory</th>
                                <th className="large80 footable-visible"><i class="fa fa-bar-chart" aria-hidden="true"></i> Statistics</th>
                                <th className="large20 footable-visible footable-last-column"><i class="fa fa-comments-o" aria-hidden="true"></i> Last Post</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="expand footable-visible footable-column-fisrt"></td>
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