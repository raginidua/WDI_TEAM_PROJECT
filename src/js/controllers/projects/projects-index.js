angular
.module('teamBuilder')
.controller('ProjectsIndexCtrl', ProjectsIndexCtrl);

ProjectsIndexCtrl.$inject = ['$http'];
function ProjectsIndexCtrl($http) {
  const vm = this;

  $http
  .get('http://localhost:3000/api/projects')
  .then(response => {
    vm.projects = response.data.projects;
  });

  vm.getTeamSize = function(requiredTeamMembersObject) {
    var teamSize = 0;
    for(var role in requiredTeamMembersObject) {
      teamSize+= requiredTeamMembersObject[role];
    }
    return teamSize;
  };

}
