angular
.module('teamBuilder')
.factory('Project', projectFactory);

projectFactory.$inject = ['API','$resource'];
function projectFactory(API, $resource) {
  return $resource(`${API}/projects/:id`, { id: '@_id'}, {
    // 'register': { method: 'POST', url: `${API}/projects/register` },
    // 'login': { method: 'POST', url: `${API}/projects/login` }
    'update': { method: 'PUT'}
  });
}
