angular
.module('teamBuilder')
.controller('ProjectsIndexCtrl', ProjectsIndexCtrl);

ProjectsIndexCtrl.$inject = ['Project', 'TeamSizeService', 'rolesArray'];
function ProjectsIndexCtrl(Project, TeamSizeService, rolesArray) {
  const vm      = this;
  vm.rolesArray = rolesArray;
  vm.filteredProjects = [];

  //intialises (runs) materialize collapsible collection/accordion
  $('.collapsible').collapsible();

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

  //filtering logic
  vm.searchForRole = function(){
    Project
    .query()
    .$promise
    .then(response => {
      if (vm.searchCriteria === 'All') {
        vm.projects = response.projects;
      } else {
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
      }
    });
  };

  vm.searchByName = function() {
    Project
    .search({searchTerm: vm.searchTerm})
    .$promise
    .then(response => {
      console.log(response);
      vm.projects = response.projects;
    });
  };


}
