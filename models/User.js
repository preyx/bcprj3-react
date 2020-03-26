const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
  username: String,
  email: String
})

UserSchema.plugin(require('passport-local-mongoose'))

module.exports = model('user', UserSchema)
