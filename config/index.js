module.exports = require('mongoose').connect('mongodb://localhost/twitchdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})