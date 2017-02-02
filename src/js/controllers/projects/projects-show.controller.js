angular
.module('teamBuilder')
.controller('ProjectsShowCtrl', ProjectsShowCtrl);

ProjectsShowCtrl.$inject = ['$stateParams', '$http', '$state', 'Project', 'Freelancer', '$scope', 'CurrentFreelancerService', 'TeamSizeService'];
function ProjectsShowCtrl($stateParams, $http, $state, Project, Freelancer, $scope, CurrentFreelancerService, TeamSizeService) {
  const vm = this;

  //get currentFreelancer stored in mainCtrl by authentication stuff
  vm.currentFreelancer = $scope.$parent.main.freelancer;

  //get project info for page
  Project
  .get({id: $stateParams.id})
  .$promise
  .then(response => {
    vm.project = response.project;
    vm.project.teamSize = TeamSizeService.getTeamSize(vm.project.requiredTeamMembers);
  });

  vm.openPositionCount = function(openTeamMembersObject) {
    var openCount = 0;
    for(var role in openTeamMembersObject) {
      openCount += openTeamMembersObject[role];
    }
    return openCount;
  };

  vm.filledPositionCount = function(liveTeamMembersObject) {
    var filledCount = 0;
    for(var role in liveTeamMembersObject) {
      filledCount += (liveTeamMembersObject[role]).length;
    }
    return filledCount;
  };

  vm.freelancerApply = function(role) {
    //add freelancer id to project waitingTeamMembers
    vm.project.waitingTeamMembers[role].push(vm.currentFreelancer._id);

    Project
    .update({id: $stateParams.id}, vm.project)
    .$promise
    .then(vm.updateFreelancer);
  };

  vm.updateFreelancer = function() {
    //add project id to freelancers pendingProjects
    const idToUpdate = vm.currentFreelancer._id;

    vm.currentFreelancer.pendingProjects.push(vm.project._id);

    Freelancer
    .update({id: idToUpdate }, vm.currentFreelancer)
    .$promise
    .then(response => {
      vm.currentFreelancer = $scope.$parent.main.freelancer;
      $state.go('freelancersShow', {id: vm.currentFreelancer._id});
    });
  };
}



  //
  //
  //
  //
  // //find the freelancer who has applied
  // //update their pending project array with the proejct id
  //
  // const currentUserId = currentFreelancer._id;
  // $http
  // .get(`http://localhost:3000/api/freelancers/${currentUserId}`)
  // .then(response => {
  //   console.log('GET THE FREELANCER: ', response.data.freelancer);
  //   vm.freelancer = response.data.freelancer;
  //   vm.freelancer.pendingProjects.push(projectId);
  //   console.log('UPDATED FREELANCER:', vm.freelancer);
  //   $http.put(`http://localhost:3000/api/freelancers/${currentUserId}`, vm.freelancer);
  // });
  //
  // //in the projects waitingTeam array, find true and remove
  // //then push the freelancer ID into the relevant array
  // console.log('PROJECT BEFORE THE SAVE', vm.project);
  // if(vm.project.waitingTeamMembers[role].indexOf(true) === -1){
  //   vm.project.waitingTeamMembers[role].push(currentUserId);
  //   console.log('UPDATED THE PROJECT:', vm.freelancer);
  // } else {
  //   const indexOfTrue = vm.project.waitingTeamMembers[role].indexOf(true);
  //   vm.project.waitingTeamMembers[role].splice(indexOfTrue, 1);
  //   vm.project.waitingTeamMembers[role].push(currentUserId);
  //   console.log('UPDATE THE PROJECT:', vm.freelancer);
  // }
  // $http
  // .put(`http://localhost:3000/api/projects/${projectId}`, vm.project)
  // .then(() => {
  //   $state.go('projectsIndex');
  // });
