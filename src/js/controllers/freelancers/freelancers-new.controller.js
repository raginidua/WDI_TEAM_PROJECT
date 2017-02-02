angular
  .module('teamBuilder')
  .controller('FreelancersNewCtrl', FreelancersNewCtrl);

FreelancersNewCtrl.$inject = ['Freelancer', 'CurrentFreelancerService'];
function FreelancersNewCtrl(Freelancer, CurrentFreelancerService) {
  const vm = this;

  //uses Freelancer factory to post freelancer object to database
  //and register.  Then triggers CurrentFreelancerService
  //to uses returned token to make request to get all freelancer's
  //info from database
  vm.freelancersCreate = function() {
    Freelancer
    .register(vm.freelancer)
    .$promise
    .then(() => {
      CurrentFreelancerService.getFreelancer();
    }, err => {
      console.log(err);
    });
  };

}
