const { model, Schema } = require('mongoose')

const MessageSchema = new Schema({
  timestamp: String,
  displayName: String,
  channelId: Number,
  color: String,
  emotes: String,
  messageText: String

})

MessageSchema.plugin(require('passport-local-mongoose'))

module.exports = model('message', MessageSchema)
