angular
.module('teamBuilder')
.controller('ProjectsShowCtrl', ProjectsShowCtrl);

ProjectsShowCtrl.$inject = ['$stateParams', '$http', '$state', 'Project', 'Freelancer', '$scope'];
function ProjectsShowCtrl($stateParams, $http, $state, Project, Freelancer, $scope) {
  const vm = this;

  //get currentFreelancer stored in mainCtrl by authentication stuff
  vm.currentFreelancer = $scope.$parent.main.freelancer;

  //get project info for page
  Project
  .get({id: $stateParams.id})
  .$promise
  .then(response => {
    vm.project = response.project;
    console.log('PROJECTS LEAD FREELANCER', vm.project.leadFreelancer._id);
    console.log('LOGGED IN USER', vm.currentFreelancer._id);
  });

  vm.openPositionCount = function(openTeamMembersObject) {
    var count = 0;
    for(var role in openTeamMembersObject) {
      count += openTeamMembersObject[role];
    }
    return count;
  };

  vm.freelancerApply = function(role, projectId) {
    //add freelancer id to project waitingTeamMembers
    vm.project.waitingTeamMembers[role].push(vm.currentFreelancer._id);
    Project
    .update({id: $stateParams.id}, vm.project)
    .$promise
    .then(response => {
      console.log('project update response', response);
    });

    //add project id to freelancers pendingProjects
    vm.currentFreelancer.pendingProjects.push($stateParams.id);
    Freelancer
    .update(currentFreelancer)
    .$promise
    .then(response => {
      console.log('freelancer update response:', response);
    });


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

  };
}
