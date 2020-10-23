import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { HashRouter as Router,
  NavLink,
  Route,
  Switch, } from 'react-router-dom'
import './App.css';
import UserList from './UserList'
import PostList from './PostList'
import CmtList from './CmtList'
import Info from './Info'
import PostsFromUser from './PostsFromUser'
import CmtsFromUser from './CmtsFromUser'


function App() {
  const [users, setUsers] = useState()
  const [posts, setPosts] = useState()
  const [comments, setComments] = useState()

  useEffect(()=>{
    fetchIt("users").then(res=>setUsers(res))
    fetchIt("posts").then(res=>setPosts(res))
    fetchIt("comments").then(res=>setComments(res))
  },[])

  async function fetchIt (term) {
    const URL = `https://jsonplaceholder.typicode.com/${term}`

    try {
      const response = await fetch(URL)
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/">Users</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/comments">Comments</NavLink>
        </nav>

        <main>
          <Switch>

            <Route exact path="/:id/info">
              <h2>User Info.</h2>
              <Info users={users}/>
            </Route>

            <Route exact path="/">
              <h2>Users</h2>
              <UserList users={users}/>
            </Route>

            <Route exact path="/posts">
              <h2>Posts</h2>
              <PostList posts={posts}/>
            </Route>

            <Route exact path="/posts/:id">
              <h2>Posts</h2>
              <PostsFromUser posts={posts} />
            </Route>

            <Route exact path="/comments">
              <h2>Comments</h2>
              <CmtList comments={comments} />
            </Route>

            <Route exact path="/post/:id/comments">
              <h2>Comments</h2>
              <CmtsFromUser comments={comments} />
            </Route>
            
          </Switch>

        </main>
      </div>
      </Router>


  );
}

export default App;
