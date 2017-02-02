angular
  .module('teamBuilder')
  .controller('FreelancersEditCtrl', FreelancersEditCtrl);

FreelancersEditCtrl.$inject = ['$stateParams', '$state', '$http', 'Freelancer', 'CurrentFreelancerService'];
function FreelancersEditCtrl($stateParams, $state, $http, Freelancer, CurrentFreelancerService) {
  const vm = this;

  //uses CurrentFreelancerService to get freelancer info
  vm.freelancer = CurrentFreelancerService.currentFreelancer.freelancer;

  //makes materialize input fields work properly (labels vs values)
  Materialize.updateTextFields();

  //uses Freelancer factory (ajax shorthand) to update
  //freelancer on database
  vm.freelancersUpdate = function freelancersUpdate(){
    Freelancer
      .update({id: $stateParams.id}, vm.freelancer)
      .$promise
      .then(resp => {
        $state.go('freelancersShow', {id: vm.freelancer._id});
      });
  };
}
