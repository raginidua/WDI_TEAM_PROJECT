angular
  .module('teamBuilder')
  .controller('FreelancersLoginCtrl', FreelancersLoginCtrl);

FreelancersLoginCtrl.$inject = ['$http','$state'];
function FreelancersLoginCtrl($http, $state) {
  const vm = this;

  vm.freelancersLogin = function freelancersLogin() {
    console.log(vm.freelancer.freelancer);
    return $http
      .post('http://localhost:3000/api/freelancers/login', vm.freelancer.freelancer)
      .then(() => {
        $state.go('freelancersShow', {id: '588fb4dcd7f62707a19d4772'});
      });
  };

}
