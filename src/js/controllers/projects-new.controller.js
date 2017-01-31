angular
  .module('teamBuilder')
  .controller('ProjectsNewCtrl', ProjectsNewCtrl);

ProjectsNewCtrl.$inject = ['$http', '$state'];
function ProjectsNewCtrl($http, $state) {
  console.log('ProjectsNewCtrl');
  const vm = this;

  vm.part1 = true;

  vm.createProject = function() {
    const object = {};
    for (var role in vm.newProject.project.teamMembers) {
      console.log(role);
      console.log(vm.newProject.project.teamMembers[role]);
      const array = [];
      const numberRequired = vm.newProject.project.teamMembers[role];
      for (var i = 0; i < numberRequired; i++) {
        array.push(true);
      }
      object[role] = array;
    }
    vm.newProject.requiredTeamMembers = object;
    // vm.newProject.requiredTeamMembers = object;
    // vm.newProject.requiredTeamMembers = object;
    // vm.newProject.requiredTeamMembers = object;
    console.log(vm.newProject);

    // //hard coded in freelancer ID pre authetication work
    // vm.newProject.project.leadFreelancer = '588e507a4d0d1f74979be1ee';
    // return $http
    //   .post('http://localhost:3000/api/projects', vm.newProject)
    //   .then(response => {
    //     console.log(response);
    //     //redirect to project show page of newly created project
    //     $state.go('projectsShow', {id: response.data.project._id});
    //   });
  };

}
