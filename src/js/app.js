angular
.module('teamBuilder', [
  'ui.router',
  'ngResource',
  'angular-jwt',
  'duScroll'
]);


(function($){
  $(function(){
    $('.button-collapse').sideNav();
  }); // end of document ready
})(jQuery); // end of jQuery name space


//this is for the footer.
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
