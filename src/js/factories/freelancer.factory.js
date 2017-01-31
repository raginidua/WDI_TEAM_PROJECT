angular
.module('teamBuilder')
.factory('Freelancer', freelancerFactory);

freelancerFactory.$inject = ['API','$resource'];
function freelancerFactory(API, $resource) {
  return $resource(`${API}/freelancers/:id`, { id: '@_id'}, {
    'register': { method: 'POST', url: `${API}/freelancers/register` },
    'login': { method: 'POST', url: `${API}/freelancers/login` }
  });
}
