angular
  .module('teamBuilder')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope','CurrentFreelancerService'];
function MainCtrl($rootScope, CurrentFreelancerService){
  console.log('MainCtrl');
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    console.log('Inside MainCtrl');
    vm.freelancer = CurrentFreelancerService.currentFreelancer.freelancer;
    console.log(vm.freelancer);
  });
}
