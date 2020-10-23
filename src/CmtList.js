  
import React from 'react'
import { NavLink } from 'react-router-dom'

function CmtList ({ comments }) {
  return (
    <aside>
      {comments &&
        comments.map(comment => (
          <ul className={`commentsOnPost`} key={comment.id}>
            <li className="comment" id={comment.postId} key={comment.id}>
                <div className="avatar"><i className="material-icons md-48">mode_comment</i></div>
                <div className="name">{comment.name}</div>
                <div className="email">by {comment.email}</div>
                <div className="body">{comment.body}</div>
            </li>
        </ul>
        ))}
    </aside>
  )
}

export default CmtList