angular
.module('teamBuilder')
.controller('ProjectsEditCtrl', ProjectsEditCtrl);

ProjectsEditCtrl.$inject = ['$http', '$state', '$stateParams'];
function ProjectsEditCtrl($http, $state, $stateParams) {
  const vm = this;

  projectsShow();

  function projectsShow(){
    return $http
    .get(`http://localhost:3000/api/projects/${$stateParams.id}`)
    .then(response => {
      vm.project = response.data.project;
    });
  }

  vm.acceptApplication =  acceptApplication;

  function acceptApplication(role, memberid) {

    const applicantsIndex = vm.project.waitingTeamMembers[role].indexOf(memberid);

    vm.project.waitingTeamMembers[role].splice(applicantsIndex, 1);
    vm.project.liveTeamMembers[role].push(memberid);

    // return $http
    // .put(`http://localhost:3000/api/projects/${vm.project._id}`, vm.project)
    // .then(() => {
    //   $state.go('usersIndex');
    // });
  }

}
