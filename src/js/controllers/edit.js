angular
  .module('teamBuilder')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['$stateParams', '$state', '$http'];
function UsersEditCtrl($stateParams, $state, $http) {
  const vm = this;
  usersShow();

  function usersShow(){
    return $http
      .get(`http://localhost:3000/api/users/${$stateParams.id}`)
      .then(response => {
        vm.user = response.data;
      });
  }

  vm.update = function usersUpdate(){
    return $http
      .put(`http://localhost:3000/api/users/${vm.user._id}`, vm.user)
      .then(() => {
        $state.go('usersIndex');
      });
  };
}
