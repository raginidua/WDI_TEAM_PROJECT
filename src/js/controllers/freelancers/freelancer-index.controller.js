angular
  .module('teamBuilder')
  .controller('FreelancersIndexCtrl', FreelancersIndexCtrl);

FreelancersIndexCtrl.$inject = ['Freelancer', 'API'];
function FreelancersIndexCtrl(Freelancer, API){
  const vm = this;
  Freelancer
    .get()
    .$promise
    .then(data => {
      vm.freelancers = data;
    });
}
