angular
  .module('teamBuilder')
  .config(Router);

Router.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

function Router($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('freelancersRegister', {
      url: '/freelancers/register',
      templateUrl: '/js/views/freelancers/register.html'
    })
    .state('freelancersLogin', {
      url: '/freelancers/login',
      templateUrl: '/js/views/freelancers/login.html'
    })
    .state('freelancersShow', {
      url: '/freelancers/:freelancerId',
      templateUrl: '/js/views/freelancers/show.html'
    })
    .state('freelancersEdit', {
      url: '/freelancers/:freelancerId',
      templateUrl: '/js/views/freelancers/edit.html'
    });

  $urlRouterProvider.otherwise('/');
}
