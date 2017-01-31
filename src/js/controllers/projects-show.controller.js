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
    const currentUserId = '5890dc47bcc7a1201b09a904';
    $http
      .get(`http://localhost:3000/api/freelancers/${currentUserId}`)
      .then(response => {
        console.log('GET THE FREELANCER: ', response.data.freelancer);
        vm.freelancer = response.data.freelancer;
        vm.freelancer.pendingProjects.push(projectId);
        console.log('UPDATE THE FREELANCER:', response.data.freelancer);
        console.log('PROJECT BEFORE THE SAVE', vm.project);
        vm.project.waitingTeamMembers[role].push(currentUserId);
        console.log('PROJECT AFTER THE SAVE', vm.project);
      });
    $http
      .put(`http://localhost:3000/api/freelancers/${currentUserId}`, vm.freelancer)
      .put(`http://localhost:3000/api/projects/${projectId}`, vm.project);
  };
}
