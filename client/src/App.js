import React, { useState, useEffect, useRef, useReducer } from 'react'
// import logo from './logo.svg';
// import { ChatProvider } from './utils/GlobalState'
import axios from 'axios'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Header from './components/Header'
import ChatBar from './components/ChatBar'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lastPost: 0,
      posts: []
    }
  }

  componentDidMount () {
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
        this.setState({
          posts: this.state.posts.concat(data.data)
        })
      })
      .catch(err => console.log(err))
  }

  // const test = ['message1', 'message2', 'message3']

  render () {
    return (
    // <ChatProvider>
      <>
        <Header />
        <Home Chat={this.state.posts} />
        <ChatBar />
      </>
    // </ChatProvider>
    )
  }
}
export default App
