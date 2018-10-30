import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 aboutUs">
                            <h3 className="aboutUs">About us</h3>
                            <h4 className="aboutUs">We're here for you</h4>
                            <h4>Posts: <span className="NumOfPost">{this.props.NumberOfPosts}</span></h4>
                            <h4>Views: <span className="NumOfView">{this.props.view}</span> </h4>
                            <h4>Online: <span className="NumOfOnliner">22</span></h4> 
                        </div>
                        
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 contact">
                            <h3 className="contact">Contact Us</h3>
                            Email: <a href="" className="contact">psychologist@gmail.com</a>
                            <br/>
                            <a href=""><i className="fa fa-facebook-square"></i></a>
                            <a href=""><i className="fa fa-envelope"></i></a>
                            <a href=""><i className="fa fa-twitter"></i></a>
                            <a href=""><i className="fa fa-instagram"></i></a>
                            <a href=""><i className="fa fa-reddit"></i></a>

                        </div>
                        
                        
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 address" >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.259925405982!2d105.81377051451399!3d21.022283286001862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab65697f2f2b%3A0x7bc455487e6157fa!2sTechKids+Coding+School!5e0!3m2!1sen!2s!4v1539781073524" width="100%"  frameborder="0" allowfullscreen></iframe>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default Footer;