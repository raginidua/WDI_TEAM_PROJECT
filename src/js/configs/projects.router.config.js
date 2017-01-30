angular
  .module('teamBuilder')
  .config(Router);

Router.$inject = ['$locationProvider', '$stateProvider'];

function Router($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('freelancersRegister', {
      url: '/freelancers/register',
      templateUrl: '/js/views/freelancers/register.html'
    });
}
