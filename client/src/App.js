import React, { useState, useEffect, useRef, useReducer } from 'react'
// import logo from './logo.svg';
// import { ChatProvider } from './utils/GlobalState'
import axios from 'axios'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Header from './components/Header'
// import ChatBar from './components/ChatBar'
// import { Redirect } from 'react-router'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lastPost: 0,
      posts: [],
      loggedIn: false
    }
  }

  componentDidMount () {
    this.tick()
    this.timerID = setInterval(
      () => this.tick(),
      10000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    axios.get(`/api/messages/${this.state.lastPost}`)
      .then(data => {
        console.log(data.data)
        if (data.data.length > 0) {
          this.setState({
            posts: this.state.posts.concat(data.data),
            lastPost: data.data[data.data.length - 1].timestamp
          })
        }
      })
      .catch(err => console.log(err))
  }

  login () {
    axios.post('/api/login')
  }

  logout () {
    axios.get('/api/logout')
      .then(data => console.log(data))
      .catch(e => console.log(e))
  }

  render () {
    return (
      <Router forceRefresh>
        <Switch>
          <Route exact path='/'>
            {this.logout()}
            <Login />
          </Route>
          <Route path='/register'>
            <SignUp />
          </Route>
          <Route path='/home'>
            <Header />
            <Home Chat={this.state.posts} />
            {/* <ChatBar /> */}
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App
