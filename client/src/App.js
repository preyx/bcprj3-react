import React, { useState, useEffect, useRef, useReducer } from 'react'
// import logo from './logo.svg';
import { ChatProvider } from './utils/GlobalState'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Header from './components/Header'
import ChatBar from './components/ChatBar'
import './App.css'

const test = ['message1', 'message2', 'message3']

function App () {
  return (
    <ChatProvider>
      <Header />
      <Home />
      <ChatBar />
    </ChatProvider>
  )
}

export default App

// import React from 'react'
// import { Platform } from 'react-native'
// import PropTypes from 'prop-types'
// import { GiftedChat } from 'react-native-gifted-chat'
// import emojiUtils from 'emoji-utils'

// import SlackMessage from './src/Chat/SlackMessage'

// export default class App extends React.Component {
//   state = {
//     messages: [],
//   }

//   componentDidMount() {
//     this.setState({
//       messages: [
//         {
//           _id: 1,
//           text: 'Hello developer!!!',
//           createdAt: new Date(),
//           user: {
//             _id: 2,
//             name: 'React Native',
//             avatar: 'https://placeimg.com/140/140/any',
//           },
//         },
//       ],
//     })
//   }

//   onSend(messages = []) {
//     this.setState(previousState => ({
//       messages: GiftedChat.append(previousState.messages, messages),
//     }))
//   }

//   renderMessage(props) {
//     const {
//       currentMessage: { text: currText },
//     } = props

//     let messageTextStyle

//     // Make "pure emoji" messages much bigger than plain text.
//     if (currText && emojiUtils.isPureEmojiString(currText)) {
//       messageTextStyle = {
//         fontSize: 28,
//         // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
//         lineHeight: Platform.OS === 'android' ? 34 : 30,
//       }
//     }

//     return <SlackMessage {...props} messageTextStyle={messageTextStyle} />
//   }

//   render() {
//     return (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={messages => this.onSend(messages)}
//         user={{
//           _id: 1,
//         }}
//         renderMessage={this.renderMessage}
//       />
//     )
//   }
// }
