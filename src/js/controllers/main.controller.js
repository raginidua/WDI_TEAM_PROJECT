angular
  .module('teamBuilder')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope','CurrentFreelancerService', '$state'];
function MainCtrl($rootScope, CurrentFreelancerService, $state){
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    vm.freelancer = CurrentFreelancerService.currentFreelancer.freelancer;
    $state.go('freelancersShow', {id: vm.freelancer._id});
  });
  vm.logout = () => {
    CurrentFreelancerService.removeFreelancer();
  };
  $rootScope.$on('loggedOut', () => {
    vm.freelancer = null;
    $state.go('home');
  });
}
