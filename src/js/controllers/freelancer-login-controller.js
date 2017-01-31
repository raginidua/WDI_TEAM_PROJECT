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
      .then((data) => {
        console.log(data);
        $state.go('freelancersShow', {id: data.data.freelancer._id});
      });
  };

}
