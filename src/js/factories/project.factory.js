angular
.module('teamBuilder')
.factory('Project', projectFactory);

//Shortcut for making requests to our projects database
//defaults include:
// { 'get':    {method:'GET'},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} };

projectFactory.$inject = ['API','$resource'];
function projectFactory(API, $resource) {
  return $resource(`${API}/projects/:id`, { id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
