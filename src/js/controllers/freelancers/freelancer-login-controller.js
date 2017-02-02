angular
  .module('teamBuilder')
  .controller('FreelancersLoginCtrl', FreelancersLoginCtrl);

FreelancersLoginCtrl.$inject = ['Freelancer', 'CurrentFreelancerService'];
function FreelancersLoginCtrl(Freelancer, CurrentFreelancerService ){
  const vm = this;

  //uses our Freelancer factory (shorthand ajax) to send
  //freelancer object (built by angualr in html) to our
  //database and return user and token.
  vm.freelancersLogin = function freelancersLogin() {
    Freelancer
      .login(vm.freelancer.freelancer)
      .$promise
      .then(() =>{
        //as token stored automattically by token service
        //can use CurrentFreelancerService to decode token,
        //make request to freelancer api and broadcast
        //'logged in' to rest of app.
        CurrentFreelancerService.getFreelancer();
      }, err => {
        console.log(err);
      });
  };

}
