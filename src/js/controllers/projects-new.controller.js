angular
  .module('teamBuilder')
  .controller('ProjectsNewCtrl', ProjectsNewCtrl);

ProjectsNewCtrl.$inject = ['$http', '$state'];
function ProjectsNewCtrl($http, $state) {
  console.log('ProjectsNewCtrl');
  const vm = this;

  vm.part1 = true;

  vm.createProject = function() {
    //logic to create array with required length
    const object = {};
    for (var role in vm.newProject.teamMembers) {
      console.log(role);
      console.log(vm.newProject.teamMembers[role]);
      const array = [];
      const numberRequired = vm.newProject.teamMembers[role];
      for (var i = 0; i < numberRequired; i++) {
        array.push(true);
      }
      object[role] = array;
    }
    vm.newProject.requiredTeamMembers = vm.newProject.teamMembers;
    vm.newProject.openTeamMembers = vm.newProject.teamMembers;
    vm.newProject.waitingTeamMembers = object;
    vm.newProject.liveTeamMembers = object;

    console.log(vm.newProject);

    //hard coded in freelancer ID pre authetication work
    vm.newProject.leadFreelancer = '5890b4837b5fd141d1bd042b';

    console.log(vm.newProject);
    return $http
      .post('http://localhost:3000/api/projects', {project: vm.newProject})
      .then(response => {
        console.log(response);
        //redirect to project show page of newly created project
        $state.go('projectsShow', {id: response.data.project._id});
      });
  };

}
