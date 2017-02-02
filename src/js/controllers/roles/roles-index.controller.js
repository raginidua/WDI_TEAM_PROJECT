angular
.module('teamBuilder')
.controller('RolesIndexCtrl', RolesIndexCtrl);

RolesIndexCtrl.$inject = ['$http'];
function RolesIndexCtrl($http) {
  const vm = this;

  $http
  .get('http://localhost:3000/api/projects')
  .then(response => {
    vm.projects = response.data.projects;
  });

  // vm.getTeamSizeNRoles = function(requiredTeamMembersObject) {
  //   var teamSize = 0;
  //   var teamRoles = '';
  //   for(var role in requiredTeamMembersObject) {
  //     if(requiredTeamMembersObject[role] > 0) {
  //       teamSize+= requiredTeamMembersObject[role];
  //       if(teamRoles === ''){
  //         teamRoles+= role;
  //       } else {
  //         teamRoles+=', '+ role;
  //       }
  //     }
  //   }
  //   return teamSize + '[' + teamRoles + ']';
  // };
  //
  // vm.getTeamSize = function(requiredTeamMembersObject) {
  //   var teamSize = 0;
  //   for(var role in requiredTeamMembersObject) {
  //     if(requiredTeamMembersObject[role] > 0) {
  //       teamSize+= requiredTeamMembersObject[role];
  //     }
  //   }
  //   return teamSize;
  // };

}
