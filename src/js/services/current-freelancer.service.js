angular
  .module('teamBuilder')
  .service('CurrentFreelancerService', CurrentFreelancerService);

CurrentFreelancerService.$inject = ['TokenService', 'Freelancer'];
function CurrentFreelancerService(TokenService, Freelancer){
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
        });
    }
  };
}
