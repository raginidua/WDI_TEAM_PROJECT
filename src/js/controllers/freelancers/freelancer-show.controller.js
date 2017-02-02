angular
.module('teamBuilder')
.controller('FreelancersShowCtrl', FreelancersShowCtrl);

FreelancersShowCtrl.$inject = ['$stateParams', 'Freelancer', '$scope', 'CurrentFreelancerService'];
function FreelancersShowCtrl($stateParams, Freelancer, $scope, CurrentFreelancerService) {
  const vm = this;

  //gets currentFreelancer using CurrentFreelancerService
  vm.currentFreelancer = CurrentFreelancerService.currentFreelancer.freelancer;

  Freelancer
  .get({id: $stateParams.id})
  .$promise
  .then(response => {
    vm.freelancer = response.freelancer;
  });

  //sets profile id so can be compared to currentFreelancer ID
  // vm.profileId = $stateParams.id;

  //intialises (runs) materialize collapsible collection/accordion
  $('.collapsible').collapsible();

}
