angular
  .module('teamBuilder')
  .service('TeamSizeService', TeamSizeService);

//iterates over requiredTeamMembersObject (property of a project)
//and totals up total team size
//can be used whenever teamSize required in view
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
