const Project = require('../models/project');

//when proectsIndex function used mongoose is used to
//search projects collection and return all documents
//some error handling built into controller
//messages sent with all responses to be more verbose
function projectsIndex(req, res) {
  Project.find({}, (err, projects) => {
    if (err) return res.status(500).json({
      message: 'something went wrong',
      error: err
    });
    if (!projects) return res.status(400).json({
      message: 'no projects'
    });
    return res.status(200).json({
      message: 'projects index',
      projects: projects
    });
  });
}

//when projects create function used mongoose is used
//to create and save a new mongo document using the
//information in the requests body
function projectsCreate(req, res) {
  const newProject = new Project(req.body);
  newProject.save((err, project) => {
    if (err) return res.status(500).json({
      message: 'something went wrong',
      error: err
    });
    return res.status(200).json({
      message: 'project created!',
      project: project
    });
  });
}

//when projectsShow function used project id taken from
//req parameters. mongoose used to search projects collection
//and return the mathinc porject which is send back in
//body of response in JSON format
function projectsShow(req, res){
  const projectId = req.params.projectId;
  Project.findById(projectId, (err, project) => {
    if (err) return res.status(500).json({
      message: 'something went wrong',
      error: err
    });
    if (!project) return res.status(400).json({
      message: 'no project found'
    });
    return res.status(400).json({
      message: 'project shown',
      project: project
    });
  });
}

module.exports = {
  index: projectsIndex,
  create: projectsCreate,
  show: projectsShow
};
