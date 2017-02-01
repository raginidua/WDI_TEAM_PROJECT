angular
  .module('teamBuilder')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$location', '$anchorScroll', '$rootScope'];
function HomeCtrl($location, $anchorScroll, $rootScope){
  const vm = this;
  vm.goToBottom = function(){
    $location.hash('bottom');
    $anchorScroll();
  };

  $('.parallax').parallax();
}
