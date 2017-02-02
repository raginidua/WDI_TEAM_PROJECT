angular
.module('teamBuilder')
.controller('RolesIndexCtrl', RolesIndexCtrl);

RolesIndexCtrl.$inject = ['$http', 'rolesArray'];
function RolesIndexCtrl($http, rolesArray) {
  const vm = this;

  vm.rolesArray = rolesArray;
  vm.searchCriteria;
  vm.filteredProjects = [];

  vm.getProjects = function() {
    $http
    .get('http://localhost:3000/api/projects')
    .then(response => {
      vm.projects = response.data.projects;
    });
  };

  vm.getProjects();

  vm.searchForRole = function(){
    $http
    .get('http://localhost:3000/api/projects')
    .then(response => {
      vm.projects = response.data.projects;
      for(var i = 0; i < vm.projects.length; i++){
        for(var role in vm.projects[i].openTeamMembers) {
          if (role === vm.searchCriteria && vm.projects[i].openTeamMembers[role] > 0) {
            vm.filteredProjects.push(vm.projects[i]);
          }
        }
      }
      vm.projects = vm.filteredProjects;
      vm.filteredProjects = [];
    });
  };
}
