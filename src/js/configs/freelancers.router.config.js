angular
  .module('teamBuilder')
  .config(freelancerRouter);

freelancerRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

function freelancerRouter($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('freelancersRegister', {
      url: '/freelancers/register',
      templateUrl: '/js/views/freelancers/register.html',
      controller: 'FreelancersNewCtrl as freelancers'
    })
    .state('freelancersLogin', {
      url: '/freelancers/login',
      templateUrl: '/js/views/freelancers/login.html',
      controller: 'FreelancersLoginCtrl',
      controllerAs: 'freelancers'
    })
    .state('freelancersShow', {
      url: '/freelancers/:id',
      templateUrl: '/js/views/freelancers/show.html',
      controller: 'FreelancersShowCtrl as freelancers'
    })
    .state('freelancersEdit', {
      url: '/freelancers/:id/edit',
      templateUrl: '/js/views/freelancers/edit.html',
      controller: 'FreelancersEditCtrl as freelancers'
    });

  $urlRouterProvider.otherwise('/');
}
