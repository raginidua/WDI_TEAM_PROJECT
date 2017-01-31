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
      vm.project = response.data;
    });
  }

  vm.update = function projectsUpdate(memberid){
    //the push and pull from the arrays needs to happen here
    console.log(memberid);
    // return $http
    // .put(`http://localhost:3000/api/projects/${vm.project._id}`, vm.project)
    // .then(() => {
    //   $state.go('usersIndex');
    // });
  };

}
