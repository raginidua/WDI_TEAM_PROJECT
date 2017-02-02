// $(document).ready(function() {
//   console.log('ready');
//   $('select').material_select();
// });

angular
.module('teamBuilder', [
  'ui.router',
  'ngResource',
  'angular-jwt'
  // 'duScroll'
  // 'ngAnimate'
]);


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    //$('select').material_select();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// $(document).ready(function(){
//   $('.collapsible').collapsible();
// });
