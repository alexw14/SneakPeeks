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

function login(req, res) {
  User.findOne({email: req.body.email}).exec().then(user => {
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        let token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  }).catch(err => res.status(401).json(err));
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
  signup,
  login
};