angular
  .module('teamBuilder')
  .controller('FreelancersShowCtrl', FreelancersShowCtrl);

FreelancersShowCtrl.$inject = ['$stateParams', '$http'];
function FreelancersShowCtrl($stateParams, $http) {
  const vm = this;
  $http
    .get(`http://localhost:3000/api/freelancers/${$stateParams.id}`)
    .then(response => {
      vm.freelancer = response.data.freelancer;
    });
}
