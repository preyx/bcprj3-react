const { model, Schema } = require('mongoose')

const MessageSchema = new Schema({
  timestamp: Date,
  displayName: String,
  channelId: Number,
  color: String,
  emotes: [Schema.Types.Mixed],
  messageText: String
})

// MessageSchema.plugin(require('passport-local-mongoose'))

module.exports = model('message', MessageSchema)
