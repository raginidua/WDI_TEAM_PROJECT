angular
  .module('teamBuilder')
  .controller('ProjectsIndexCtrl', ProjectsIndexCtrl);

ProjectsIndexCtrl.$inject = ['$http'];
function ProjectsIndexCtrl($http) {
  const vm = this;

  $http
    .get('http://localhost:3000/api/projects')
    .then(response => {
      vm.projects = response.data;
    });

}
