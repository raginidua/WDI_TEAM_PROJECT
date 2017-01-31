angular
  .module('teamBuilder')
  .service('CurrentFreelancerService', CurrentFreelancerService);

CurrentFreelancerService.$inject = ['TokenService', 'Freelancer', '$rootScope'];
function CurrentFreelancerService(TokenService, Freelancer, $rootScope){
  const self = this;

  self.getUser = () => {
    const decodedToken = TokenService.decodeToken();
    console.log('CurrentFreelancerService decodedToken:', decodedToken);

    if (decodedToken) {
      Freelancer
        .get({ id: decodedToken.id})
        .$promise
        .then(data => {
          console.log(data);
          self.currentFreelancer = data;
          $rootScope.$broadcast('loggedIn');
        });
    }
  };
}
