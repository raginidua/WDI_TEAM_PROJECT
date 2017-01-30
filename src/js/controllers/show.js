angular
  .module('teamBuilder')
  .controller('ProjectsShowCtrl', ProjectsShowCtrl);

ProjectsShowCtrl.$inject = ['$stateParams', '$http'];
function ProjectsShowCtrl($stateParams, $http) {
  const vm = this;
  $http
    .get(`http://localhost:3000/api/projects/${$stateParams.projectId}`)
    .then(response => {
      console.log(response);
      vm.project = response.data.project;
    });
}
