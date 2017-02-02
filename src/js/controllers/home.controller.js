angular
  .module('teamBuilder')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$location', '$anchorScroll', '$rootScope', '$document'];
function HomeCtrl($location, $anchorScroll, $rootScope, $document){
  const vm = this;
  vm.goToBottom = function(){
    var offset = -80;
    var bottom = angular.element(document.getElementById('bottom'));
    $document.scrollToElement(bottom, offset, 1000);
  };

  vm.goToTop = function(){
    var offset = 150;
    var top = angular.element(document.getElementById('top'));
    $document.scrollToElement(top, offset, 1000);
  };

  $('.parallax').parallax();
}
