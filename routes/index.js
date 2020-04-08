const router = require('express').Router()

router.use('/api', require('./userRoutes'))
router.use('/api', require('./messageRoutes'))

module.exports = router
