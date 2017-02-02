angular
.module('teamBuilder')
.controller('RolesIndexCtrl', RolesIndexCtrl);

RolesIndexCtrl.$inject = ['$http', 'rolesArray', 'Project'];
function RolesIndexCtrl($http, rolesArray, Project) {
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
    Project
    .query()
    .$promise
    .then(response => {
      //get all the projects
      vm.projects = response.projects;
      //iterate through each project
      for(var i = 0; i < vm.projects.length; i++){
        //run over the open members object
        for(var role in vm.projects[i].openTeamMembers) {
          //check if the role is the same and there are open roles
          if (role === vm.searchCriteria && vm.projects[i].openTeamMembers[role] > 0) {
            //if criteria is mateched theem push into a temp array
            vm.filteredProjects.push(vm.projects[i]);
          }
        }
      }
      //replace the vm.projects array with the temp array
      vm.projects = vm.filteredProjects;
      vm.filteredProjects = [];
    });
  };

  vm.getTeamSize = function(requiredTeamMembersObject) {
    var teamSize = 0;
    for(var role in requiredTeamMembersObject) {
      if(requiredTeamMembersObject[role] > 0) {
        teamSize+= requiredTeamMembersObject[role];
      }
    }
    return teamSize;
  };
}
