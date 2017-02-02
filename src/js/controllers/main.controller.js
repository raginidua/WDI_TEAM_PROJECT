angular
  .module('teamBuilder')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope','CurrentFreelancerService', '$state'];
function MainCtrl($rootScope, CurrentFreelancerService, $state){
  const vm = this;
  //MainCtrl listening for loggedIn signal from CurrentFreelancerService
  //then gets current user info and stores on it's own scope
  //current user then accesible throughout child controllers in html
  //via main.freelancer and in Ctrl's via $scope.parent etc..
  $rootScope.$on('loggedIn', () => {
    vm.freelancer = CurrentFreelancerService.currentFreelancer.freelancer;
    $state.go('freelancersShow', {id: vm.freelancer._id});
  });
  //will log user out on logout click event using CurrentFreelancerService
  vm.logout = () => {
    CurrentFreelancerService.removeFreelancer();
  };
  //will listen for feedback after the above from CurrentFreelancerService
  //and set freelancer to null throughout the app
  $rootScope.$on('loggedOut', () => {
    vm.freelancer = null;
    $state.go('home');
  });
}
