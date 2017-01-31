angular
  .module('teamBuilder')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope','CurrentFreelancerService', '$state'];
function MainCtrl($rootScope, CurrentFreelancerService, $state){
  console.log('MainCtrl');
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    console.log('Inside MainCtrl');
    vm.freelancer = CurrentFreelancerService.currentFreelancer.freelancer;
    console.log(vm.freelancer);
  });
  vm.logout = () => {
    console.log('logout');
    CurrentFreelancerService.removeFreelancer();
  };
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });
}
