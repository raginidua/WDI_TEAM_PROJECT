angular
.module('teamBuilder')
.controller('ProjectsShowCtrl', ProjectsShowCtrl);

ProjectsShowCtrl.$inject = ['$stateParams', '$http', '$state'];
function ProjectsShowCtrl($stateParams, $http, $state) {
  const vm = this;
  $http
  .get(`http://localhost:3000/api/projects/${$stateParams.id}`)
  .then(response => {
    vm.project = response.data.project;
  });

  vm.freelancerApply = function(role, projectId) {
    //find the freelancer who has applied
    //update their pending project array with the proejct id

    const currentUserId = '5890ebb4ab8f9a337d3e1c24';
    $http
    .get(`http://localhost:3000/api/freelancers/${currentUserId}`)
    .then(response => {
      console.log('GET THE FREELANCER: ', response.data.freelancer);
      vm.freelancer = response.data.freelancer;
      vm.freelancer.pendingProjects.push(projectId);
      console.log('UPDATED FREELANCER:', vm.freelancer);
      $http.put(`http://localhost:3000/api/freelancers/${currentUserId}`, vm.freelancer);
    });

    //in the projects waitingTeam array, find true and remove
    //then push the freelancer ID into the relevant array
    console.log('PROJECT BEFORE THE SAVE', vm.project);
    if(vm.project.waitingTeamMembers[role].indexOf(true) === -1){
      vm.project.waitingTeamMembers[role].push(currentUserId);
      console.log('UPDATED THE PROJECT:', vm.freelancer);
    } else {
      const indexOfTrue = vm.project.waitingTeamMembers[role].indexOf(true);
      vm.project.waitingTeamMembers[role].splice(indexOfTrue, 1);
      vm.project.waitingTeamMembers[role].push(currentUserId);
      console.log('UPDATE THE PROJECT:', vm.freelancer);
    }
    $http
    .put(`http://localhost:3000/api/projects/${projectId}`, vm.project)
    .then(() => {
      $state.go('projectsIndex');
    });

  };
}
