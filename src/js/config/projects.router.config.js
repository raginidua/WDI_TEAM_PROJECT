angular
  .module('teamBuilder')
  .config(projectsRouter);

projectsRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
function projectsRouter($locationProvider, $stateProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  //ui.router uses state names to direct app to associated
  //html view file and used associated controller
  $stateProvider
    .state('projectsIndex', {
      url: '/projects',
      templateUrl: '/js/views/projects/index.html',
      controller: 'ProjectsIndexCtrl as projectsIndex'
    })
    .state('projectsNew', {
      url: '/projects/new',
      templateUrl: '/js/views/projects/new.html',
      controller: 'ProjectsNewCtrl as projectsNew'
    })
    .state('projectsShow', {
      url: '/projects/:id',
      templateUrl: '/js/views/projects/show.html',
      controller: 'ProjectsShowCtrl as projectsShow'
    })
    .state('projectsEdit', {
      url: '/projects/:id/edit',
      templateUrl: '/js/views/projects/edit.html',
      controller: 'ProjectsEditCtrl as projectsEdit'
    })
    .state('freelancersIndex', {
      url: '/freelancers',
      templateUrl: '/js/views/freelancers/index.html',
      controller: 'FreelancersIndexCtrl as freelancersIndex'
    })
    .state('rolesIndex', {
      url: '/roles',
      templateUrl: '/js/views/roles/index.html',
      controller: 'RolesIndexCtrl as rolesIndex'
    });
    //if none of the above redirect to '/'
  $urlRouterProvider.otherwise('/');
}
