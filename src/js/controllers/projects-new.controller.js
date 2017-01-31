angular
  .module('teamBuilder')
  .controller('ProjectsNewCtrl', ProjectsNewCtrl);

ProjectsNewCtrl.$inject = ['$http', '$state'];
function ProjectsNewCtrl($http, $state) {
  console.log('ProjectsNewCtrl');
  const vm = this;

  vm.part1 = true;

  vm.createProject = function() {
    //hard coded in freelancer ID pre authetication work
    vm.project.leadFreelancer = '5890815eb8e04e5622833cba';
    vm.project.activeTeamMembers = {};
    vm.project.openTeamMembers = {};
    vm.project.pendingTeamMembers = {};
    console.log(vm.project);
    return $http
      .post('http://localhost:3000/api/projects', {project: vm.project})
      .then(response => {
        console.log(response);
        //redirect to project show page of newly created project
        $state.go('projectsShow', {id: response.data.project._id});
      });
  };

}
