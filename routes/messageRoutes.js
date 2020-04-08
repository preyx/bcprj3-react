const router = require('express').Router()
const { Message } = require('../models')
const passport = require('passport')
// const jwt = require('jsonwebtoken')

// let lastPost = 0

// console.log(lastPost)

// Message.find().sort('-timestamp').limit(1)
//   .then(data => {
//     lastPost = data.timestamp
//     console.log('lastPost', lastPost)
//   })
//   .catch(e => console.log(e))

router.post('/messages', passport.authenticate('jwt'), (req, res) => {
  Message.create(req.body)
    .then(data => res.json(data))
    .catch(e => console.log(e))
})
router.get('/messages/:timestamp', (req, res) => {
  // Post.find({'page': curPage}).sort('-date').limit(10).exec(function(err, posts){
  if (req.params.timestamp === 0) {
    Message.find().sort('-timestamp').limit(50)
      .then(data => res.json(data))
      .catch(e => console.log(e))
  } else {
    Message.find({ timestamp: { $gt: req.params.timestamp } })
      .then(data => res.json(data))
      .catch(e => console.log(e))
  }
})
// router.get('/messages/last', (req, res) => {
//   res.json({ time: lastPost })
// })

module.exports = router
