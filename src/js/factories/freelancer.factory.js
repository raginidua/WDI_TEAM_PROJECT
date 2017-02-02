angular
.module('teamBuilder')
.factory('Freelancer', freelancerFactory);


//Shortcut for making requests to our freelancer database
//defaults include:
// { 'get':    {method:'GET'},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} };


freelancerFactory.$inject = ['API','$resource'];
function freelancerFactory(API, $resource) {
  return $resource(`${API}/freelancers/:id`, { id: '@_id'}, {
    'register': { method: 'POST', url: `${API}/freelancers/register` },
    'login': { method: 'POST', url: `${API}/freelancers/login` },
    'update': { method: 'PUT' }
  });
}
