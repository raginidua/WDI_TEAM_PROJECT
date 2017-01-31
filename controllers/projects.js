const Project = require('../models/project');

//when proectsIndex function used mongoose is used to
//search projects collection and return all documents
//some error handling built into controller
//messages sent with all responses to be more verbose
function projectsIndex(req, res) {
  Project
  .find({})
  .populate('activeTeamMembers', 'email')
  .populate('pendingTeamMembers', 'email')
  .exec((err, projects) => {
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
  const newProject = new Project(req.body.project);
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
  const projectId = req.params.id;
  Project
  .findById(projectId)
  .populate('activeTeamMembers', 'email')
  .populate('pendingTeamMembers', 'email')
  .exec((err, project) => {
    if (err) return res.status(500).json({
      message: 'something went wrong',
      error: err
    });
    if (!project) return res.status(400).json({
      message: 'no project found'
    });
    return res.status(200).json({
      message: 'project shown',
      project: project
    });
  });
}

//when project update function used project id taken from req parameters
//and updated document taken from req body
//mongoose used to find by id and update relevant document
//pre update document send back in response
function projectsUpdate(req, res) {
  Project.findByIdAndUpdate(req.params.projectId, req.body.project, (err, project) => {
    if (err) res.status(500).json({
      message: 'something went wrong',
      error: err
    });
    if (!project) res.status(400).json({
      message: 'no project found'
    });
    res.status(200).json({
      message: 'project updated',
      project: project
    });
  });
}

function projectsDelete(req, res) {
  Project.findByIdAndRemove(req.params.projectId, (err, project) => {
    if (err) return res.status(500).json({
      message: 'something went wrong',
      error: err
    });
    if (!project) return res.status(400).json({
      message: 'no project found'
    });
    return res.status(200).json({
      message: 'project deleted',
      project: project
    });
  });
}

module.exports = {
  index: projectsIndex,
  create: projectsCreate,
  show: projectsShow,
  update: projectsUpdate,
  delete: projectsDelete
};
