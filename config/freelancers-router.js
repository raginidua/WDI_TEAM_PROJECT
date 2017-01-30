const express = require('express');
const router  = express.Router();

const authentications = require('../controllers/authentications');
const freelancers     = require('../controllers/freelancers');

router.route('/register')
  .post(authentications.register);

router.route('/login')
  .post(authentications.login);

router.route('/')
  .get(freelancers.index);

router.route('/:freelancerId')
  .get(freelancers.show)
  .put(freelancers.update)
  .delete(freelancers.delete);

module.exports = router;
