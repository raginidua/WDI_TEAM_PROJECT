// angular
// .module('teamBuilder')
// .controller('FreelancersShowCtrl', FreelancersShowCtrl);
//
// FreelancersShowCtrl.$inject = ['$stateParams', '$http'];
// function FreelancersShowCtrl($stateParams, $http) {
//   const vm = this;
//   $http
//   .get(`http://localhost:3000/api/freelancers/${$stateParams.id}`)
//   .then(response => {
//     console.log(response);
//     vm.freelancer = response.data.freelancer;
//   });
//   vm.fetchProjects = function(){
//     $http({
//       url: `http://localhost:3000/api/projects`,
//       method: 'GET',
//       params: {leadFreelancer: $stateParams.id}
//     })
//     .then(response => {
//       console.log(response);
//       vm.freelancer.myProjects = response.data.projects;
//       console.log(vm.freelancer.myProjects);
//     });
//   };
// }
