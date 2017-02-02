angular
.module('teamBuilder')
.controller('FreelancersShowCtrl', FreelancersShowCtrl);

FreelancersShowCtrl.$inject = ['$stateParams', 'Freelancer', '$scope', 'CurrentFreelancerService'];
function FreelancersShowCtrl($stateParams, Freelancer, $scope, CurrentFreelancerService) {
  const vm = this;

  //gets currentFreelancer using CurrentFreelancerService
  vm.freelancer = CurrentFreelancerService.currentFreelancer.freelancer;

  //sets profile id so can be compared to currentFreelancer ID
  vm.profileId = $stateParams.id;

  //intialises (runs) materialize collapsible collection/accordion
  $('.collapsible').collapsible();

}
