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
    console.log('ROLE', role);
    console.log('MEMBERID', memberid);

    const applicantsArray = vm.project.waitingTeamMembers[role];
    console.log(applicantsArray)
    applicantsArray.indexOf(memberid);

    //the push and pull from the arrays needs to happen here



    // return $http
    // .put(`http://localhost:3000/api/projects/${vm.project._id}`, vm.project)
    // .then(() => {
    //   $state.go('usersIndex');
    // });
  }

}
