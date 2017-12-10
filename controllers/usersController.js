const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

function signup(req, res) {
  let user = new User(req.body);
  user.save().then(user => {
    // return a JWT assigned to a key named token
    res.json({token: createJWT(user)});
  })
  .catch(err => res.status(400).json(err));
}

// Helper function using jsonwebtoken library's sign method that creates JWTs
function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '12h'}
  );
}

module.exports = {
  signup
};