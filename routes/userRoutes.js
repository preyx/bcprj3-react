const router = require('express').Router()
const { User } = require('../models')
const jwt = require('jsonwebtoken')

router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) throw err
    res.json({
      isLoggedIn: !!user,
      user: user.username,
      token: jwt.sign({ id: user._id }, 'B00tC4mpB0t2020')
    })
  })
})

router.post('/users/register', (req, res) => {
  User.register(new User({
    username: req.body.username,
    email: req.body.email
  }), req.body.password, err => {
    if (err) throw err
    res.sendStatus(200)
  })
})

router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/')
      }
    })
  }
  console.log('logged out')
})

module.exports = router
