angular
.module('teamBuilder')
.controller('FreelancersShowCtrl', FreelancersShowCtrl);

FreelancersShowCtrl.$inject = ['$stateParams', '$http', 'Freelancer', '$scope'];
function FreelancersShowCtrl($stateParams, $http, Freelancer, $scope) {
  const vm = this;
  vm.currentFreelancer = $scope.$parent.main.freelancer;

  $('.collapsible').collapsible();

  Freelancer
    .get({id: $stateParams.id})
    .$promise
    .then(response => {
      vm.freelancer = response.freelancer;
    });

  // $http
  // .get(`http://localhost:3000/api/freelancers/${$stateParams.id}`)
  // .then(response => {
  //   vm.freelancer = response.data.freelancer;
  // });
  // vm.fetchProjects = function(){
  //   $http({
  //     url: `http://localhost:3000/api/projects`,
  //     method: 'GET',
  //     params: {leadFreelancer: $stateParams.id}
  //   })
  //   .then(response => {
  //     vm.freelancer.myProjects = response.data.projects;
  //   });
  // };
}
