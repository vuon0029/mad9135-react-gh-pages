import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

function Info ({ users }) {
    
    console.log(users)
    const { id } = useParams()
    let user 
    if (users){
        user = users.filter(p => p.id === parseInt(id))
    }
    console.log(user)

    if (!user) return null

    return user.map(u=>{
        {}
        return (
            <div className="mainInfo">
            <ul className={`user isolate`} id={u.id} key={u.id}>
                <div className="avatar"><i className="material-icons md-48 md-dark">face</i></div>
                <div className="name">{u.name}</div>
                <div className="email"><i className="material-icons">email</i> {u.email}</div>
                <div className="phone"><i className="material-icons">phone</i> {u.phone}</div>
                <div className="website"><i className="material-icons">web</i> www.{u.website}</div>
                <div className="company"><i className="material-icons ">work</i> {u.company.name}
                    <li className="company catchPhrase"><i className="material-icons">format_quote</i>{`${u.company.catchPhrase}`}<i className="material-icons">format_quote</i></li>
                </div>
                <div className="address"><i className="material-icons md-48">place</i>
                    <li className="street">{`${u.address.street}`}</li>
                    <li className="suite">{`${u.address.suite}`}</li>
                    <li className="city">{u.address.city}</li>
                    <li className="zipcode">{u.address.zipcode}</li>
                </div>
                <NavLink
                className='NavLink'
                key={u.id}
                to={'/posts/' + u.id}>
                <button className="userBtn">View Posts</button>
                </NavLink>
            </ul>
            </div>

        )
    })
}

export default Info

// import React from 'react'
// import { useParams } from 'react-router-dom'

// function Info({users}){
//     const { id } = useParams()
//     console.log(id)
//     let userIsolate 
//     if (users){
//         userIsolate = users.filter(u => u.id === parseInt(id))
//     }
//     console.log(userIsolate.name)

//     if (!userIsolate) return null

//     if (userIsolate != undefined){
        // return userIsolate.map(post=>{
        //     return (
        //         <ul className={`user isolate`} id={userIsolate.id}>
        //                 <div className="avatar">userAvatar</div>
        //                 <div className="name">{userIsolate.name}</div>
        //                 <div className="email">{userIsolate.email}</div>
        //                 <div className="phone">{userIsolate.phone}</div>
        //         </ul>
        //     )
        // })
//     }
// }
