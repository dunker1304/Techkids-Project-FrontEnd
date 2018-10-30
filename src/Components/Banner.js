import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h2>Psychologist</h2>
                            <p className="intro">What's your problems? Curious how others might perceive your situation? <br/>
                            <a href="/newpost" className="askQuestion">Ask Your Question</a> today and find out what others think...</p>
                        </div>
                        
                        
                        
                        
                        
                        
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Banner;