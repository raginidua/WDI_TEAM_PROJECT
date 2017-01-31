angular
  .module('teamBuilder')
  .controller('FreelancersNewCtrl', FreelancersNewCtrl);

FreelancersNewCtrl.$inject = ['$http','$state', 'Freelancer'];
function FreelancersNewCtrl($http, $state, Freelancer) {
  const vm = this;


  vm.freelancersCreate = function() {
    Freelancer
    .register(vm.freelancer, (data) => {
      console.log(data);
    });
  };

  vm.freelancersCreate = function freelancersCreate() {
    return $http
      .post('http://localhost:3000/api/freelancers/register', vm.freelancer)
      .then(() => {
        $state.go('freelancersShow', {id: '588fb4dcd7f62707a19d4772'});
      });

  };

  // vm.freelancersCreate = function freelancersCreate() {
  //   return $http
  //     .post('http://localhost:3000/api/freelancers/register', vm.freelancer)
  //     .then(() => {
  //       $state.go('freelancersShow');
  //     });
  // };

}
