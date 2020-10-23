  
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function UserList ({ users }) {
  return (
    <ul className="userList">
      {users &&
        users.map(user => (
          
          <li className="user" id={user.id} key={user.id}>
            <div className="view">
              <div className="avatar"><i className="material-icons md-48 md-dark">account_circle</i></div>
              <NavLink
              className='NavLink'
              to={'/' + user.id+'/info'}>
                <button className="info"><i className="material-icons">info</i></button>
              </NavLink>
            </div>
            <div className="content">
              <div className="name">{user.name}</div>
              <NavLink
              className='NavLink'
              key={user.id}
              to={'/posts/' + user.id}>
                <button className="userBtn">View Posts</button>
              </NavLink>
              <div className="email">{user.email}</div>
            </div>
          </li>
        ))}
    </ul>
  )
}

export default UserList