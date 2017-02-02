const Project = require('../models/project');
const Freelancer = require('../models/freelancer');

//when proectsIndex function used mongoose is used to
//search projects collection and return all documents
//some error handling built into controller
//messages sent with all responses to be more verbose
function projectsIndex(req, res) {
  const query = {};
  if (req.query.leadFreelancer) query.leadFreelancer = req.query.leadFreelancer;
  Project
  .find(query)
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
    //get leadFreelancer id and update thier profile. will break if more than 1!
    const freelancerId = req.body.project.leadFreelancer;
    Freelancer.findByIdAndUpdate(freelancerId, {
      myProjects: [freelancerId]
    }, (err, freelancer) => {
      if(err) console.log(err);
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
  .populate('leadFreelancer')
  .populate({
    path: 'liveTeamMembers.UXDesigners',
    model: 'Freelancer'
  })
  .populate({
    path: 'liveTeamMembers.UIDesigners',
    model: 'Freelancer'
  })
  .populate({
    path: 'liveTeamMembers.FrontendDevelopers',
    model: 'Freelancer'
  })
  .populate({
    path: 'liveTeamMembers.BackendDevelopers',
    model: 'Freelancer'
  })
  .populate({
    path: 'liveTeamMembers.DataScientists',
    model: 'Freelancer'
  })
  .populate({
    path: 'liveTeamMembers.Marketers',
    model: 'Freelancer'
  })
  .populate({
    path: 'liveTeamMembers.ProjectManagers',
    model: 'Freelancer'
  })
  .populate({
    path: 'liveTeamMembers.iOSDevelopers',
    model: 'Freelancer'
  })
  .populate({
    path: 'liveTeamMembers.AndroidDevelopers',
    model: 'Freelancer'
  })
  .populate({
    path: 'waitingTeamMembers.UXDesigners',
    model: 'Freelancer'
  })
  .populate({
    path: 'waitingTeamMembers.UIDesigners',
    model: 'Freelancer'
  })
  .populate({
    path: 'waitingTeamMembers.FrontendDevelopers',
    model: 'Freelancer'
  })
  .populate({
    path: 'waitingTeamMembers.BackendDevelopers',
    model: 'Freelancer'
  })
  .populate({
    path: 'waitingTeamMembers.DataScientists',
    model: 'Freelancer'
  })
  .populate({
    path: 'waitingTeamMembers.Marketers',
    model: 'Freelancer'
  })
  .populate({
    path: 'waitingTeamMembers.ProjectManagers',
    model: 'Freelancer'
  })
  .populate({
    path: 'waitingTeamMembers.iOSDevelopers',
    model: 'Freelancer'
  })
  .populate({
    path: 'waitingTeamMembers.AndroidDevelopers',
    model: 'Freelancer'
  })
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
  Project.findByIdAndUpdate(req.params.id, req.body, (err, project) => {
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

function projectsSearch(req, res){
  var regex = new RegExp(req.params.searchTerm, 'i');
  Project
  .find({name: regex}, (err, projects) => {
    if (err) return res.status(500).json({
      message: 'something went wrong',
      err: err
    });
    if (!projects) return res.status(404).json({message: 'no projects found'});
    return res.status(200).json({
      message: 'all the projects',
      projects: projects
    });
  });
}

module.exports = {
  index: projectsIndex,
  create: projectsCreate,
  show: projectsShow,
  update: projectsUpdate,
  delete: projectsDelete,
  search: projectsSearch
};
