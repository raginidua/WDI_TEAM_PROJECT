angular
.module('teamBuilder')
.controller('FreelancersShowCtrl', FreelancersShowCtrl);

FreelancersShowCtrl.$inject = ['$stateParams', '$http', 'Freelancer'];
function FreelancersShowCtrl($stateParams, $http, Freelancer) {
  const vm = this;
  
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
