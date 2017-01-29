module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin
};

const Freelancer = require('../models/freelancer.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function authenticationsRegister(req, res) {
  Freelancer.create(req.body.freelancer, (err, freelancer) => {
    console.log(req.body.freelancer);
    if (err) return res.status(500).json({
      message: 'Something went wrong',
      err
    });

    const token = jwt.sign(freelancer._id, config.secret, {expiresIn: 60*60*24 });


    return res.status(201).json({
      message: `Welcome {freelancer.firstName}!`,
      freelancer,
      token
    });
  });
}

function authenticationsLogin(req, res) {
  Freelancer.findOne({ email: req.body.email }, (err, freelancer) => {
    console.log(req.body.email);
    if (err) return res.status(500).json({ message: 'Something went wrong' });
    if (!freelancer || !freelancer.validatePassword(req.body.password)) {
      return res.status(401).json({ message: ' Unauthorized ' });
    }

    const token = jwt.sign(freelancer._id, config.secret, { expiresIn: 60*60*24});

    return res.status(200).json({
      message: 'Welcome back',
      freelancer,
      token
    });
  });
}
