angular
.module('teamBuilder')
.controller('ProjectsEditCtrl', ProjectsEditCtrl);

ProjectsEditCtrl.$inject = ['$http', '$state', '$stateParams', 'Project', 'Freelancer', '$scope'];
function ProjectsEditCtrl($http, $state, $stateParams, Project, Freelancer, $scope) {
  const vm = this;
  const currentFreelancer = $scope.$parent.main.freelancer;

  Project
  .get({id: $stateParams.id })
  .$promise
  .then(response => {
    vm.project = response.project;
  });

  vm.acceptApplication =  acceptApplication;

  function acceptApplication(role, memberid) {
    //remove applicant from projects waiting applicants list
    const applicantsIndex = vm.project.waitingTeamMembers[role].indexOf(memberid);
    vm.project.waitingTeamMembers[role].splice(applicantsIndex, 1);

    //add applicant to projects live team
    vm.project.liveTeamMembers[role].push(memberid);

    //project's open positions needs to go down
    vm.project.openTeamMembers[role] -= 1;

    //update project in the DB
    Project
    .update({id: $stateParams.id }, vm.project)
    .$promise
    .then(response => {
      console.log(response);
    });

    //The Applicant's profile needs to be updated now - remove the project from the pending //applications array and add to the projectsI'mIn array
    const projectIndex = currentFreelancer.pendingProjects.indexOf(vm.project._id);
    currentFreelancer.pendingProjects.splice(projectIndex, 1);
    currentFreelancer.projects.push(vm.project._id);

    //update freelancer in the DB
    Freelancer
    .update({id: currentFreelancer._id }, vm.currentFreelancer)
    .$promise
    .then(response => {
      console.log(response);
    });

    //redirect back to project show page
    return $http
    .put(`http://localhost:3000/api/projects/${vm.project._id}`, vm.project)
    .then(() => {
      $state.go('projectsShow', {id: vm.project._id});
    });
  }

}
