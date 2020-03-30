const router = require('express').Router()
const { User } = require('../models')
const jwt = require('jsonwebtoken')

router.post('/messages', (req, res) => {
  Message.create(req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})

module.exports = router
