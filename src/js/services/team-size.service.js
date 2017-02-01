angular
  .module('teamBuilder')
  .service('TeamSizeService', TeamSizeService);

TeamSizeService.$inject =[];
function TeamSizeService(){
  const self = this;
  self.getTeamSize = function(requiredTeamMembersObject) {
    var teamSize = 0;
    for(var role in requiredTeamMembersObject) {
      if(requiredTeamMembersObject[role] > 0) {
        teamSize+= requiredTeamMembersObject[role];
      }
    }
    return teamSize;
  };
}
