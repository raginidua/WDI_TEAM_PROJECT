angular
.module('teamBuilder')
.controller('ProjectsEditCtrl', ProjectsEditCtrl);

ProjectsEditCtrl.$inject = ['$stateParams', 'Project', 'Freelancer', 'CurrentFreelancerService'];
function ProjectsEditCtrl($stateParams, Project, Freelancer, CurrentFreelancerService) {
  const vm = this;
  //gets currentFreelancer using CurrentFreelancerService
  vm.currentFreelancer = CurrentFreelancerService.currentFreelancer.freelancer;

  //get project details from database using our
  //Project factory and set as property of Ctrl scope
  //so can be accessed by view
  Project
  .get({id: $stateParams.id })
  .$promise
  .then(response => {
    vm.project = response.project;
  });

  vm.acceptApplication =  acceptApplication;

  function acceptApplication(role, applicantID ) {

    Freelancer
      .get({id: applicantID})
      .$promise
      .then(response => {
        vm.applicant = response.freelancer;

        //remove applicant from projects waiting applicants list
        const applicantsIndex = vm.project.waitingTeamMembers[role].indexOf(vm.applicant._id);
        vm.project.waitingTeamMembers[role].splice(applicantsIndex, 1);

        //add applicant to projects live team
        vm.project.liveTeamMembers[role].push(vm.applicant._id);

        //project's open positions needs to go down
        if(vm.project.openTeamMembers[role] > 0){
          vm.project.openTeamMembers[role] -= 1;
        }

        //update project in the DB
        Project
        .update({id: $stateParams.id }, vm.project);

        //The Applicant's profile needs to be updated now -
        //remove the project from the pending
        //applications array and add to the projectsImIn array
        const projectIndex = vm.applicant.pendingProjects.indexOf(vm.project._id);
        vm.applicant.pendingProjects.splice(projectIndex, 1);
        vm.applicant.projects.push(vm.project._id);

        //update freelancer in the DB
        Freelancer
        .update({id: vm.applicant._id }, vm.applicant);

      });
  }

  vm.rejectApplication =  rejectApplication;

  function rejectApplication(role, applicantID) {

    Freelancer
      .get({id: applicantID})
      .$promise
      .then(response => {
        vm.applicant = response.freelancer;

        //remove applicant from projects waiting applicants list
        const applicantsIndex = vm.project.waitingTeamMembers[role].indexOf(vm.applicant._id);
        vm.project.waitingTeamMembers[role].splice(applicantsIndex, 1);

        //update project in the DB
        Project
        .update({id: $stateParams.id }, vm.project);

        //The Applicant's profile needs to be updated now - remove the project from the pending //applications array and add to the projectsI'mIn array
        const projectIndex = vm.applicant.pendingProjects.indexOf(vm.project._id);
        vm.applicant.pendingProjects.splice(projectIndex, 1);
        // vm.applicant.projects.push(vm.project._id);
        // update freelancer in the DB
        Freelancer
        .update({id: vm.applicant._id }, vm.applicant);

      });
  }
}
