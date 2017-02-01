angular
.module('teamBuilder')
.controller('ProjectsEditCtrl', ProjectsEditCtrl);

ProjectsEditCtrl.$inject = ['$http', '$state', '$stateParams', 'Project', 'Freelancer', '$scope'];
function ProjectsEditCtrl($http, $state, $stateParams, Project, Freelancer, $scope) {
  const vm = this;
  vm.currentFreelancer = $scope.$parent.main.freelancer;

  Project
  .get({id: $stateParams.id })
  .$promise
  .then(response => {
    vm.project = response.project;
  });

  vm.acceptApplication =  acceptApplication;

  function acceptApplication(role, applicantID ) {

    $http
    .get(`http://localhost:3000/api/freelancers/${applicantID}`)
    .then(response => {
      vm.applicant = response.data.freelancer;

      //remove applicant from projects waiting applicants list
      const applicantsIndex = vm.project.waitingTeamMembers[role].indexOf(vm.applicant);
      vm.project.waitingTeamMembers[role].splice(applicantsIndex, 1);

      //add applicant to projects live team
      vm.project.liveTeamMembers[role].push(vm.applicant);

      //project's open positions needs to go down
      vm.project.openTeamMembers[role] -= 1;

      console.log('about to save the new project', vm.project);
      //update project in the DB
      Project
      .update({id: $stateParams.id }, vm.project)
      .$promise
      .then(response => {
        console.log(response);
      });

      //The Applicant's profile needs to be updated now - remove the project from the pending //applications array and add to the projectsI'mIn array
      const projectIndex = vm.applicant.pendingProjects.indexOf(vm.project._id);
      vm.applicant.pendingProjects.splice(projectIndex, 1);
      vm.applicant.projects.push(vm.project._id);

      console.log('about to save the applicant', vm.applicant);

      //update freelancer in the DB
      Freelancer
      .update({id: vm.applicant._id }, vm.applicant)
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
    });
  }
}
