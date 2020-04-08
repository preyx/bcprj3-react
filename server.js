require('dotenv').config()
const express = require('express')
const { join } = require('path')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const { User } = require('./models')
const cors = require('cors')
const app = express()
const { ChatClient } = require('dank-twitch-irc')
const { Message } = require('./models')

app.use(cors())

const client = new ChatClient({
  username: process.env.TWITCH_USERNAME,
  password: process.env.TWITCH_PASSWORD
})

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'B00tC4mpB0t2020'
}, (jwtPayload, cb) => User.findById(jwtPayload.id)
  .then(user => cb(null, user))
  .catch(err => cb(err))
))

app.use(require('./routes'))

// app.get('/login', (req, res) => {
//   res.render('login')
// })
// app.get('/join', (req, res) => {
//   res.render('join')
// })

require('./config')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(e => console.error(e))

client.on('ready', _ => console.log('Connected to server!'))
client.on('close', error => { if (error) console.error('Client closed due to error:', error) })
client.on('PRIVMSG', msg => {
  console.log(msg)
  Message.create({
    timestamp: msg.serverTimestampRaw,
    displayName: msg.displayName,
    channelId: msg.channelID,
    color: msg.colorRaw,
    emotes: msg.emotes,
    messageText: msg.messageText
  })
    .then(res => console.log(res))
    .catch(err => console.error(err))
})
// client.on('PRIVMSG', msg => {
//   console.log(``)
// })
client.connect()
client.join('bootcampbot2020')
