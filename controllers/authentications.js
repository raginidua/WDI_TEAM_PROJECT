module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin
};

const Freelancer = require('../models/freelancer.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

//authenticationsRegister is used to create a new instance of a freelancer, based on the mongoose freelancer model.
//This returns the freelancer object and a JWTtoken which enables information from the api to be accessed.
function authenticationsRegister(req, res) {
  Freelancer.create(req.body.freelancer, (err, freelancer) => {
    if (err) return res.status(500).json({
      message: 'Something went wrong',
      err
    });

    const token = jwt.sign({id: freelancer._id}, config.secret, {expiresIn: 60*60*24 });


    return res.status(201).json({
      message: `Welcome {freelancer.firstName}!`,
      freelancer,
      token
    });
  });
}

//authenticationsLogin searches for the email property of an existing freelancer object & returns and runs the validate pw function, and returns the freelancer json object & token.
function authenticationsLogin(req, res) {
  Freelancer.findOne({ email: req.body.email }, (err, freelancer) => {
    console.log(req.body.email);
    if (err) return res.status(500).json({ message: 'Something went wrong' });
    if (!freelancer || !freelancer.validatePassword(req.body.password)) {
      return res.status(401).json({ message: 'Incorrect login details' });
    }

    const token = jwt.sign({id: freelancer._id}, config.secret, { expiresIn: 60*60*24});

    return res.status(200).json({
      message: 'Welcome back',
      freelancer,
      token
    });
  });
}
