angular
  .module('teamBuilder')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$location', '$anchorScroll', '$rootScope', '$document'];
function HomeCtrl($location, $anchorScroll, $rootScope, $document){
  const vm = this;
  vm.goToBottom = function(){
    var offset = -90;
    var bottom = angular.element(document.getElementById('bottom'));
    $document.scrollToElement(bottom, offset, 1000);
  };
  // The function allows us to enable scrolling through the page by clicking the Learn More button. Anchor scroll is a bower package which allows you to add a timeframe and more details to anchorscroll, which is already aprt of angular.

  vm.goToTop = function(){
    var offset = 150;
    var top = angular.element(document.getElementById('top'));
    $document.scrollToElement(top, offset, 1000);
  };

    // The function allows us to enable scrolling through the page back to the top by clicking the Scroll Up button.

  $('.parallax').parallax();

  // This initialization request allows the parallax to load on the page.  The above is Materialise syntax.
}
