angular
  .module('teamBuilder')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$stateParams', '$http'];
function UsersShowCtrl($stateParams, $http) {
  const vm = this;
  $http
    .get(`http://localhost:3000/api/projects/${$stateParams.id}`)
    .then(response => {
      vm.project = response.data;
    });

}
