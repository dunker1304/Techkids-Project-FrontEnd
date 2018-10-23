import React, { Component } from 'react'
import NextPageButton from '../Components/NextPageButton'
import Post from '../Components/Post'
export default class DetailPost extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Post/>
        <NextPageButton/>
      </div>
    )
  }
}
