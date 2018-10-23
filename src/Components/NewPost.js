import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/NewPost.css'
export default class NewPost extends Component {
  render() {
    return (
      <div>
        <form className="container mt-3">
            <div className="cbbCategories row">
                <select className="form-control form-control-lg mt-3">
                    <option value="0">Select category:</option>
                    <option value="1">Family</option>
                    <option value="2">Love</option>
                    <option value="3">Society</option>
                    <option value="4">Education</option>
                    <option value="5">Policy</option>
                </select>
            </div>
            <div className=" row mt-3">
            <p className="text-primary ">Wirte your problem here! </p>
            <textarea className="form-control " id="content" ></textarea>
            <p className="text-danger mt-3" id="alert"> The content is EMPTY! </p>
            </div>
            <div className=" text-center ">
            <input type="submit"  className="btn btn-info btn-lg  mt-3 " id="submitBtn" value="Post"/>
            </div>
        </form>
      </div>
    )
  }
}
