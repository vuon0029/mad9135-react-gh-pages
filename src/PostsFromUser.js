import React from 'react'
import { useParams,NavLink } from 'react-router-dom'

function PostsFromUser({posts}){

    const { id } = useParams()
    let userPosts 
    if (posts){
        userPosts = posts.filter(p => p.userId === parseInt(id))
    }

    if (!userPosts) return null

    return (
        <ul className="postList">
          {userPosts &&
            userPosts.map(post => (
              
                <li className="post" id={post.userId} key={post.id}>
                    <div className="view">
                        <div className="avatar"><i className="material-icons md-48">notes</i></div>
                        <NavLink
                        className='NavLink'
                        key={post.id}
                        to={`/post/${post.id}/comments`}>
                            <button className="postBtn">View Comments</button>
                        </NavLink>
                    </div>
                    <div className="content">
                        <div className="title">{post.title}</div>
                        <div className="body">{post.body}</div>
                    </div>
                </li>
            ))}
        </ul>
      )
}

export default PostsFromUser