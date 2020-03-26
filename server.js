require('dotenv').config()
const express = require('express')
const { join } = require('path')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const { User } = require('./models')
const app = express()
const { ChatClient } = require('dank-twitch-irc')

let client = new ChatClient({
  username: process.env.TWITCH_USERNAME,
  password: process.env.TWITCH_PASSWORD
})

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'randomstring123'
}, (jwtPayload, cb) => User.findById(jwtPayload.id)
  .then(user => cb(null, user))
  .catch(err => cb(err))
))

app.use(require('./routes'))

app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/join', (req, res) => {
  res.render('join')
})

require('./config')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.error(e))

client.on('ready', _ => console.log('Connected to server!'))
client.on('close', error => { if (error) console.error('Client closed due to error:', error) })
client.on('PRIVMSG', msg => { console.log(`[#${msg.channelName}] ${msg.displayName}: ${msg.messageText}`) })
client.connect()
client.join('bootcampbot2020')
