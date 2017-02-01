angular
  .module('teamBuilder')
  .controller('ProjectsNewCtrl', ProjectsNewCtrl);

ProjectsNewCtrl.$inject = ['$state', '$scope', 'Project', 'Freelancer', 'rolesArray'];
function ProjectsNewCtrl($state, $scope, Project, Freelancer, rolesArray) {
  const vm = this;
  const currentFreelancer = $scope.$parent.main.freelancer;
  let first = true;

  vm.rolesArray = rolesArray;


  setTimeout(function() {
    console.log(vm.newProject);
  }, 1000);

  // vm.newProject['teamMembers'] = {};
  //
  // rolesArray.forEach((element, index, array) => {
  //   vm.newProject.teamMembers[element] = 1;
  // });

  vm.addMember = function() {
    if (first) {
      vm.newProject['teamMembers'] = {};
      rolesArray.forEach((element, index, array) => {
        vm.newProject.teamMembers[element] = 0;
      });
      first = false;
    }
    vm.newProject.teamMembers[vm.newProject.memberToAdd] += 1;
  };




  vm.part1 = true;

  vm.createProject = function() {
    //logic to create array with required length
    const object = {};
    for (var role in vm.newProject.teamMembers) {
      const array = [];
      // const numberRequired = vm.newProject.teamMembers[role];
      // for (var i = 0; i < numberRequired; i++) {
      //   array.push(true);
      // }
      object[role] = array;
    }
    vm.newProject.requiredTeamMembers = vm.newProject.teamMembers;
    vm.newProject.openTeamMembers     = vm.newProject.teamMembers;
    vm.newProject.waitingTeamMembers  = object;
    vm.newProject.liveTeamMembers     = object;
    vm.newProject.leadFreelancer      = currentFreelancer._id;

    //saving project and adding id to freelancers object
    //before updating freelancer
    Project
      .save({project: vm.newProject})
      .$promise
      .then(response => {
        currentFreelancer.myProjects.push(response.project._id);
        Freelancer
          .update({id: currentFreelancer._id}, currentFreelancer);
        $state.go('projectsShow', {id: response.project._id});
      });
  };

}
