angular
  .module('teamBuilder')
  .config(freelancerRouter);

freelancerRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

function freelancerRouter($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  //ui.router used state names to direct app to associated
  //html view file and used associated controller
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html',
      controller: 'HomeCtrl as home'
    })
    .state('freelancersRegister', {
      url: '/freelancers/register',
      templateUrl: '/js/views/freelancers/register.html',
      controller: 'FreelancersNewCtrl as freelancersNew'
    })
    .state('freelancersLogin', {
      url: '/freelancers/login',
      templateUrl: '/js/views/freelancers/login.html',
      controller: 'FreelancersLoginCtrl as freelancersLogin'
    })
    .state('freelancersShow', {
      url: '/freelancers/:id',
      templateUrl: '/js/views/freelancers/show.html',
      controller: 'FreelancersShowCtrl as freelancersShow'
    })
    .state('freelancersEdit', {
      url: '/freelancers/:id/edit',
      templateUrl: '/js/views/freelancers/edit.html',
      controller: 'FreelancersEditCtrl as freelancersEdit'
    });

  //if none of the above names found then redirect to '/'
  $urlRouterProvider.otherwise('/');
}
