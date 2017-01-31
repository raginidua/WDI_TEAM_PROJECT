// app.js is the main JS file which you should define your Angular module
console.log('JS loaded');

angular
  .module('teamBuilder', [
    'ui.router',
    'ngResource',
    'angular-jwt'
  ]);


(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
