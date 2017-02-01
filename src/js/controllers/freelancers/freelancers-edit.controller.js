angular
  .module('teamBuilder')
  .controller('FreelancersEditCtrl', FreelancersEditCtrl);

FreelancersEditCtrl.$inject = ['$stateParams', '$state', '$http', 'Freelancer'];
function FreelancersEditCtrl($stateParams, $state, $http, Freelancer) {
  const vm = this;

  Freelancer
    .get({id: $stateParams.id})
    .$promise
    .then(response => {
      vm.freelancer = response.freelancer;
    });

  Materialize.updateTextFields();

  vm.freelancersUpdate = function freelancersUpdate(){
    Freelancer
      .update({id: $stateParams.id}, vm.freelancer)
      .$promise
      .then(resp => {
        $state.go('freelancersShow', {id: vm.freelancer._id});
      });
  };
}
