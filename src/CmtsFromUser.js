import React from 'react'
import { useParams } from 'react-router-dom'

function CmtsFromUser({comments}){
    const { id } = useParams()
    let userCmts 
    if (comments){
        userCmts = comments.filter(c => c.postId === parseInt(id))
    }
    console.log(userCmts)

    if (!userCmts) return null

    return (
        <aside>
          {userCmts &&
            userCmts.map(comment => (
              <ul className={`commentsOnPost`}>
                <li className="comment" id={comment.userId} key={comment.id}>
                    <div className="view">
                        <div className="avatar"><i className="material-icons md-48">mode_comment</i></div>
                    </div>
                    <div className="content">
                        <div className="name">{comment.name}</div>
                        <div className="email">by {comment.email}</div>
                        <div className="body">{comment.body}</div>
                    </div>
                </li>
            </ul>
            ))}
        </aside>
      )
}

export default CmtsFromUser