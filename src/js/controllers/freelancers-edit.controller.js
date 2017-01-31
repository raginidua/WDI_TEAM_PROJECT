angular
  .module('teamBuilder')
  .controller('FreelancersEditCtrl', FreelancersEditCtrl);

FreelancersEditCtrl.$inject = ['$stateParams', '$state', '$http'];
function FreelancersEditCtrl($stateParams, $state, $http) {
  const vm = this;
  freelancersShow();

  function freelancersShow(){
    return $http
      .get(`http://localhost:3000/api/freelancers/${$stateParams.id}`)
      .then(response => {
        vm.freelancer = response.data;
      });
  }

  vm.freelancersUpdate = function freelancersUpdate(){
    return $http
      .put(`http://localhost:3000/api/freelancers/${vm.freelancer._id}`, vm.newFreelancer)
      .then(() => {
        $state.go('freelancersShow');
      });
  };
}
