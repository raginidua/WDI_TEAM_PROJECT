angular
.module('teamBuilder')
.controller('RolesIndexCtrl', RolesIndexCtrl);

RolesIndexCtrl.$inject = ['$http', 'rolesArray'];
function RolesIndexCtrl($http, rolesArray) {
  const vm = this;

  vm.rolesArray = rolesArray;
  vm.searchCriteria;


  $http
  .get('http://localhost:3000/api/projects')
  .then(response => {
    vm.projects = response.data.projects;
  });

  vm.searchForRole = function(){
    console.log('SEARCHING FOR', vm.searchCriteria);
  };

  vm.getTeamSizeNRoles = function(requiredTeamMembersObject) {
    var teamSize = 0;
    var teamRoles = '';
    for(var role in requiredTeamMembersObject) {
      if(requiredTeamMembersObject[role] > 0) {
        teamSize+= requiredTeamMembersObject[role];
        if(teamRoles === ''){
          teamRoles+= role;
        } else {
          teamRoles+=', '+ role;
        }
      }
    }
    return teamSize + '[' + teamRoles + ']';
  };


}
