angular
  .module('teamBuilder')
  .controller('FreelancersLoginCtrl', FreelancersLoginCtrl);

FreelancersLoginCtrl.$inject = ['$http','$state','Freelancer', 'TokenService'];
function FreelancersLoginCtrl($http, $state, Freelancer, TokenService ){
  const vm = this;

  vm.freelancersLogin = function freelancersLogin() {
    console.log(vm.freelancer.freelancer);
    // return $http
    //   .post('http://localhost:3000/api/freelancers/login', vm.freelancer.freelancer)
    //   .then((data) => {
    //     console.log(data);
    //     $state.go('freelancersShow', {id: data.data.freelancer._id});
    //   });
    Freelancer
      .login(vm.freelancer.freelancer)
      .$promise
      .then(data =>{
        TokenService.setToken(data.token);
        console.log(data);
      });






  };

}
