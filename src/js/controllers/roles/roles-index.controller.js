angular
.module('teamBuilder')
.controller('RolesIndexCtrl', RolesIndexCtrl);

RolesIndexCtrl.$inject = ['$http', 'rolesArray'];
function RolesIndexCtrl($http, rolesArray) {
  const vm = this;

  vm.rolesArray = rolesArray;
  vm.searchCriteria;

  $http
  .get('http://localhost:3000/api/projects')
  .then(response => {
    vm.projects = response.data.projects;
  });

  vm.filteredProjects = [];

  vm.searchForRole = function(){
    console.log('BUTTON HAS BEEN CLICKED TO SEARCH FOR', vm.searchCriteria);

    for(var i = 0; i < vm.projects.length; i++){
      for(var role in vm.projects[i].openTeamMembers) {
        console.log('CHECKING', vm.projects[i].name, '__TEAMROLES__:', vm.projects[i].openTeamMembers);

        if (role === vm.searchCriteria && vm.projects[i].openTeamMembers[role] > 0) {
          console.log('MATCH and available');
          vm.filteredProjects.push(vm.projects[i]);
        }
      }
    }
  };
}
