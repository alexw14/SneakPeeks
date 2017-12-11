const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    biography: String,
    website: String,
    avatar: String
  },
  {
    timestamps: true
  }
)

userSchema.pre('save', function(next) {
  let user = this;
  if (!user.isModified('password')) return next();
  // password has been changed, salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('User', userSchema);