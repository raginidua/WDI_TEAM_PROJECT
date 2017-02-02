// $(document).ready(function() {
//   console.log('ready');
//   $('select').material_select();
// });

angular
.module('teamBuilder', [
  'ui.router',
  'ngResource',
  'angular-jwt',
  'duScroll'
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

//this is for the footer.
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
