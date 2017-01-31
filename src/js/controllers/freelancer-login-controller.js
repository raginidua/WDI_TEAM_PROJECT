angular
  .module('teamBuilder')
  .controller('FreelancersLoginCtrl', FreelancersLoginCtrl);

FreelancersLoginCtrl.$inject = ['$http','$state','Freelancer', 'TokenService', 'CurrentFreelancerService'];
function FreelancersLoginCtrl($http, $state, Freelancer, TokenService, CurrentFreelancerService ){
  const vm = this;

  vm.freelancersLogin = function freelancersLogin() {
    // return $http
    //   .post('http://localhost:3000/api/freelancers/login', vm.freelancer.freelancer)
    //   .then((data) => {
    //     console.log(data);
    //     $state.go('freelancersShow', {id: data.data.freelancer._id});
    //   });
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
