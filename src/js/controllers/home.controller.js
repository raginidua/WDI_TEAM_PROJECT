angular
  .module('teamBuilder')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$location', '$anchorScroll', '$rootScope', '$document'];
function HomeCtrl($location, $anchorScroll, $rootScope, $document){
  const vm = this;
  vm.goToBottom = function(){
    var offset = 10;
    var bottom = angular.element(document.getElementById('bottom'));
    $document.scrollToElement(bottom, offset, 1000);
  };

  $('.parallax').parallax();
}
