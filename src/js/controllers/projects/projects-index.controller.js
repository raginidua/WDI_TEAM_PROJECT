angular
.module('teamBuilder')
.controller('ProjectsIndexCtrl', ProjectsIndexCtrl);

ProjectsIndexCtrl.$inject = ['$http', 'Project', 'TeamSizeService'];
function ProjectsIndexCtrl($http, Project, TeamSizeService) {
  const vm = this;

  //uses custom non array query property on Project factory
  Project
    .query()
    .$promise
    .then(response => {
      vm.projects = response.projects;
    });

  //uses custom TeamSizeService to get size of team from
  //requiredTeamMembersObject on project object
  vm.getTeamSize = TeamSizeService.getTeamSize;

}
