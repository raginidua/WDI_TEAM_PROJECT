angular
  .module('teamBuilder')
  .controller('FreelancersLoginCtrl', FreelancersLoginCtrl);

FreelancersLoginCtrl.$inject = ['$http','$state','Freelancer', 'TokenService', 'CurrentFreelancerService'];
function FreelancersLoginCtrl($http, $state, Freelancer, TokenService, CurrentFreelancerService ){
  const vm = this;

  vm.freelancersLogin = function freelancersLogin() {
    Freelancer
      .login(vm.freelancer.freelancer)
      .$promise
      .then(() =>{
        CurrentFreelancerService.getFreelancer();
      }, err => {
        console.log(err);
      });
  };

}
