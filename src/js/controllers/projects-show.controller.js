angular
  .module('teamBuilder')
  .controller('ProjectsShowCtrl', ProjectsShowCtrl);

ProjectsShowCtrl.$inject = ['$stateParams', '$http'];
function ProjectsShowCtrl($stateParams, $http) {
  const vm = this;
  
  $http
    .get(`http://localhost:3000/api/projects/${$stateParams.id}`)
    .then(response => {
      vm.project = response.data.project;
    });

}
