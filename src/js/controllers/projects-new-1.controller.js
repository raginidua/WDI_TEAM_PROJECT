angular
  .module('teamBuilder')
  .controller('ProjectsNew1Ctrl', ProjectsNew1Ctrl);

ProjectsNew1Ctrl.$inject = ['$http', '$state', 'CurrentProjectService'];
function ProjectsNew1Ctrl($http, $state, CurrentProjectService) {
  console.log('ProjectsNew1Ctrl');
  const vm = this;

  vm.part1 = true;

  vm.createProject = function() {
    vm.newProject.project.leadFreelancer = '588e507a4d0d1f74979be1ee';
    console.log(vm.newProject);
    return $http
      .post('http://localhost:3000/api/projects', vm.newProject)
      .then(response => {
        console.log(response.data.project);
        CurrentProjectService.setProject(response.data.project);
        $state.go('projectsNew3');
      });
  };

}
