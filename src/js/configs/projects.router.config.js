angular
  .module('teamBuilder')
  .config(projectsRouter);

projectsRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
function projectsRouter($locationProvider, $stateProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('projectsIndex', {
      url: '/projects/index',
      templateUrl: '/js/views/projects/index.html',
      controller: 'ProjectsIndexCtrl as projects'
    })
    .state('projectsNew', {
      url: '/projects/new',
      templateUrl: '/js/views/projects/new.html',
      controller: 'ProjectsNewCtrl',
      controllerAs: 'projectsNew'
    })
    // .state('projectsNew2', {
    //   url: '/projects/new/part2',
    //   templateUrl: '/js/views/projects/newPart2.html'
    // })
    .state('projectsInvites', {
      url: '/projects/new/invites',
      templateUrl: '/js/views/projects/invites.html',
      controller: 'ProjectsInvitesCtrl',
      controllerAs: 'projectsInvites'
    })
    .state('projectsShow', {
      url: '/projects/:id',
      templateUrl: '/js/views/projects/show.html',
      controller: 'ProjectsShowCtrl as projects'
    })
    .state('projectsEdit', {
      url: '/projects/:id',
      templateUrl: '/js/views/projects/edit.html',
      controller: 'ProjectsEditCtrl as projects'
    });

  $urlRouterProvider.otherwise('/');
}
