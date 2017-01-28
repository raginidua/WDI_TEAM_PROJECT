const express  = require('express');
const router   = express.Router();
const projects = require('../controllers/projects');

//if get reqest made to localhost ... /api/projects use the
//projects index controller to handle request and response
//if post use projects create controller
router.route('/')
  .get(projects.index)
  .post(projects.create);

//if get request made to localhost ... /api/projects/projectid
//use projects show controller
//if put use projects update controller
//if delete use projects delete controller
router.route('/:projectId')
  .get(projects.show)
  .put(projects.update)
  .delete(projects.delete);

module.exports = router;
