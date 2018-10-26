import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/NewPost.css'
import axios from 'axios';
import queryString from  'query-string'

export default class NewPost extends Component {
  state= {
     title:"",
     description:"",
     categoiesCombo:"",
     category:"5bcc9e238bf4c22e2cd50703"


  }


  componentDidMount(){
    
    axios.get('http://localhost:6969/api/category/data')
    
    .then(data => {
     this.setState({ categoiesCombo: data.data.result});
  
    
    })
    .catch(err => { console.log(err) });
  
  }

  handlerChangeInput = (event) => {
    const { value, name } = event.target;
    this.setState({[name]: value});
}


   handlerOnSubmit=(event)=>{
            event.preventDefault();
           
            axios.post("http://localhost:6969/api/post",{
            
                title: this.state.title,
                description: this.state.description,
                category:this.state.category,
                
              },{


                withCredentials:true
              })
              .then(response=>{
                console.log(response.data)
                this.props.history.push('/');
               
              })
              .catch (err=>{
                 
                const value=((this.props.location.pathname))
               
                this.props.history.push(`/login?path=${value}`);
              
              
              });
        }
    

  render() {
    const allCategory=  this.state.categoiesCombo ? this.state.categoiesCombo.map(item=>
      <option value={item._id}>{item.nameCategory}</option>


    ) :""
    return (
      <div>
        <div >
        <p className="h1 text-center text-info mt-3">POST YOUR PROBLEM</p>
        <hr/>
        </div>
        <form className=" container mt-3 " onSubmit={this.handlerOnSubmit} >
            <p className ="row">Catagory</p>  
            <div className="cbbCategories row mt-3">
  
                <select className="form-control"  name="category"  onChange={this.handlerChangeInput}  value={this.state.category}>  
                   {allCategory} 
                </select>
            </div>
            <div className=" row mt-3">
            <p>Title:</p>
            <textarea className="form-control " onChange={this.handlerChangeInput}  name="title" value={this.state.title}></textarea>
            <p className="mt-3">Description :</p>
            <textarea className="form-control " id="content"  onChange={this.handlerChangeInput} name="description" value={this.state.description}></textarea>
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