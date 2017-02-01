angular
.module('teamBuilder')
.controller('ProjectsEditCtrl', ProjectsEditCtrl);

ProjectsEditCtrl.$inject = ['$http', '$state', '$stateParams', 'Project'];
function ProjectsEditCtrl($http, $state, $stateParams, Project) {
  const vm = this;

  Project
    .get({id: $stateParams.id })
    .$promise
    .then(response => {
      vm.project = response.project;
    });

  // projectsShow();
  //
  // function projectsShow(){
  //   return $http
  //   .get(`http://localhost:3000/api/projects/${$stateParams.id}`)
  //   .then(response => {
  //     vm.project = response.data.project;
  //   });
  // }

  vm.acceptApplication =  acceptApplication;

  function acceptApplication(role, memberid) {
    //remove applicant from waiting applicants list
    const applicantsIndex = vm.project.waitingTeamMembers[role].indexOf(memberid);
    vm.project.waitingTeamMembers[role].splice(applicantsIndex, 1);

    //add applicant to live team
    vm.project.liveTeamMembers[role].push(memberid);

    //open positions needs to go down
    vm.project.openTeamMembers[role] -= 1;

    //update project
    Project
      .update({id: $stateParams.id }, vm.project)
      .$promise
      .then(response => {
        console.log(response);
      });


    // //remove applicant from waiting applicants list
    // const applicantsIndex = vm.project.waitingTeamMembers[role].indexOf(memberid);
    // vm.project.waitingTeamMembers[role].splice(applicantsIndex, 1);
    //
    // //add applicant to live team
    // vm.project.liveTeamMembers[role].push(memberid);
    //
    // //open positions needs to go down
    // var availablePositions = vm.project.openTeamMembers[role];
    // availablePositions--;
    // vm.project.openTeamMembers[role] = availablePositions;
    //
    // //update the applicant active array
    // $http
    // .get(`http://localhost:3000/api/users/${memberid}`)
    // .then(response => {
    //   vm.freelancer = response.data.freelancer;
    //   vm.freelancer.pendingProjects.push(vm.project._id);
    // });
    //
    // //redirect back to project show page
    // return $http
    // .put(`http://localhost:3000/api/projects/${vm.project._id}`, vm.project)
    // .then(() => {
    //   $state.go('projectsShow', {id: vm.project._id});
    // });
  }

}
