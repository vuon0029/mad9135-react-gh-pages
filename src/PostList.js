  
import React from 'react'
import { NavLink } from 'react-router-dom'
// import './UserList.css'

function PostList ({ posts }) {
  return (
    <ul className="postList">
      {posts &&
        posts.map(post => (
          
            <li className="post" id={post.userId} key={post.id}>
            <div className="avatar"><i className="material-icons md-48">notes</i></div>
            <div className="title">{post.title}</div>
            <div className="body">{post.body}</div>
            </li>
        ))}
    </ul>
  )
}

export default PostList