angular
  .module('teamBuilder')
  .controller('ProjectsNewCtrl', ProjectsNewCtrl);

ProjectsNewCtrl.$inject = ['$state', 'Project', 'Freelancer', 'rolesArray', 'CurrentFreelancerService'];
function ProjectsNewCtrl($state, Project, Freelancer, rolesArray, CurrentFreelancerService) {
  const vm = this;
  vm.newProject = {};

  //gets currentFreelancer from currentFreelancerService
  const currentFreelancer = CurrentFreelancerService.currentFreelancer.freelancer;

  //if adding first member create empty object on
  //project.teamMembers
  let first    = true;

  //set to true once first team member added
  vm.canSubmit = false;

  //uses roles array constant to populate select tag in
  //view
  vm.rolesArray = rolesArray;

  //if first member added create empty object at key teamMembers
  //on newProject (the obejct which will be saved to database)
  //then populate with roles array keys
  //and values of 0 (i.e no members)
  //on subsequent member addidng increment appropriate role
  vm.addMember = function() {
    if (first) {
      vm.newProject['teamMembers'] = {};
      rolesArray.forEach(element => {
        vm.newProject.teamMembers[element] = 0;
      });
      //toggle indicators for first member added
      //can can sumbit which enables submit button in view
      first = false;
      vm.canSubmit = true;
    }
    //member to add is the role current selected by user
    //in view (e.g ui designer). increments.
    vm.newProject.teamMembers[vm.newProject.memberToAdd] += 1;
  };



  vm.createProject = function() {
    //logic to create array with required length
    //creates object with keys of roles and empty arrays
    //as values
    const object = {};
    for (var role in vm.newProject.teamMembers) {
      const array = [];
      object[role] = array;
    }
    //uses teamMembers object to set requiredTeamMembers and
    //openTeamMembers to be saved to database.
    vm.newProject.requiredTeamMembers = vm.newProject.teamMembers;
    vm.newProject.openTeamMembers     = vm.newProject.teamMembers;
    //uses the above to popolate waitingTeamMembers and
    //liveTeamMembers to be saved to database
    vm.newProject.waitingTeamMembers  = object;
    vm.newProject.liveTeamMembers     = object;

    //populates leadFreelancer to be saved to database
    vm.newProject.leadFreelancer      = currentFreelancer._id;

    //saving project and adding id to freelancers object
    //before updating freelancer
    Project
      .save({project: vm.newProject})
      .$promise
      .then(response => {
        currentFreelancer.myProjects.push(response.project._id);
        Freelancer
          .update({id: currentFreelancer._id}, currentFreelancer);
        $state.go('projectsShow', {id: response.project._id});
      });
  };
}
