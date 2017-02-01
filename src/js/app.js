angular
.module('teamBuilder', [
  'ui.router',
  'ngResource',
  'angular-jwt'
]);


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    //$('select').material_select();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// Do not remvove synatx below.

// $(document).ready(function(){
//   $('.parallax').parallax();
// });
