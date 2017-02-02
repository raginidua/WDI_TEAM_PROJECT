angular
.module('teamBuilder')
.controller('ProjectsShowCtrl', ProjectsShowCtrl);

ProjectsShowCtrl.$inject = ['$stateParams', 'Project', 'Freelancer', 'CurrentFreelancerService', 'TeamSizeService'];
function ProjectsShowCtrl($stateParams, Project, Freelancer, CurrentFreelancerService, TeamSizeService) {
  const vm = this;

  //if currentFreelancer logged in then
  //get currentFreelancer stored in mainCtrl by authentication stuff
  if (CurrentFreelancerService.currentFreelancer) {
    vm.currentFreelancer = CurrentFreelancerService.currentFreelancer.freelancer;
  }

  //get project info for page
  Project
  .get({id: $stateParams.id})
  .$promise
  .then(response => {
    vm.project = response.project;
    vm.project.teamSize = TeamSizeService.getTeamSize(vm.project.requiredTeamMembers);
  });

  //calculates number of open postitions to inform ng-if
  //logic in view
  vm.openPositionCount = function(openTeamMembersObject) {
    var openCount = 0;
    for(var role in openTeamMembersObject) {
      openCount += openTeamMembersObject[role];
    }
    return openCount;
  };

  //calculates number of filled postitions to inform ng-if
  //logic in view
  vm.filledPositionCount = function(liveTeamMembersObject) {
    var filledCount = 0;
    for(var role in liveTeamMembersObject) {
      filledCount += (liveTeamMembersObject[role]).length;
    }
    return filledCount;
  };

  vm.freelancerApply = function($event, role) {
    //if button disabled do nothing
    if ($event.toElement.disabled) return;
    //add freelancer id to project waitingTeamMembers
    vm.project.waitingTeamMembers[role].push(vm.currentFreelancer._id);

    //update project
    Project
    .update({id: $stateParams.id}, vm.project)
    .$promise
    .then(vm.updateFreelancer);

    //disables button and sets text to Applied
    $event.toElement.disabled = true;
    $event.toElement.innerText = 'Applied';
  };

  //freelancer has just applied, push project id into their
  //pending applicatinos array
  vm.updateFreelancer = function() {
    //add project id to freelancers pendingProjects
    const idToUpdate = vm.currentFreelancer._id;

    vm.currentFreelancer.pendingProjects.push(vm.project._id);

    Freelancer
    .update({id: idToUpdate }, vm.currentFreelancer)
    .$promise
    .then(response => {
      vm.currentFreelancer = CurrentFreelancerService.currentFreelancer.freelancer;
    });
  };
}
