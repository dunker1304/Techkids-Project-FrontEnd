import React, { Component } from 'react';

class BreadCrumb extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Catagory</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                        </nav>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default BreadCrumb;