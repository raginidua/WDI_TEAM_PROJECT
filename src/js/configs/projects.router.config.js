angular
  .module('teamBuilder')
  .config(projectsRouter);

projectsRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
function projectsRouter($locationProvider, $stateProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('projectsIndex', {
      url: '/projects/index',
      templateUrl: '/js/views/projects/index.html'
    })
    .state('projectsNew1', {
      url: '/projects/new/part1',
      templateUrl: '/js/views/projects/newPart1.html'
    })
    .state('projectsNew2', {
      url: '/projects/new/part2',
      templateUrl: '/js/views/projects/newPart2.html'
    })
    .state('projectsNew3', {
      url: '/projects/new/part3',
      templateUrl: '/js/views/projects/newPart3.html'
    })
    .state('projectsApply', {
      url: '/projects/:projectId/apply',
      templateUrl: '/js/views/projects/apply.html'
    })
    .state('projectsUpdate', {
      url: '/projects/:projectId/update',
      templateUrl: '/js/views/projects/update.html'
    });

  $urlRouterProvider.otherwise('/');
}
