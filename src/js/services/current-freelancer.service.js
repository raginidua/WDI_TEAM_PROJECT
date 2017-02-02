angular
  .module('teamBuilder')
  .service('CurrentFreelancerService', CurrentFreelancerService);

//service used to retrieve information on user
//based on id from stored token
CurrentFreelancerService.$inject = ['TokenService', 'Freelancer', '$rootScope'];
function CurrentFreelancerService(TokenService, Freelancer, $rootScope){
  const self = this;

  //retrieves token from current user
  self.getFreelancer = () => {
    const decodedToken = TokenService.decodeToken();

    //if token and if decoded retrieve information from freelancer database
    //using Freelancer factory
    if (decodedToken) {
      Freelancer
        .get({ id: decodedToken.id})
        .$promise
        .then(data => {
          //sets current freelancer info onto self
          //stored so other controllers can retrieve
          self.currentFreelancer = data;
          //sends signal to rest of app that there is a logged in user
          $rootScope.$broadcast('loggedIn');
        });
    }
  };

  //on initation of app run getFreelancer to see if user has loggedIn
  //in past 24 hours
  self.getFreelancer();

  //function to remove token, set currentFreelancer to null,
  //and broadcast signal to rest of app
  //used when 'loggout' button clicked
  self.removeFreelancer = () => {
    self.currentFreelancer = null;
    TokenService.removeToken();
    $rootScope.$broadcast('loggedOut');
  };
}
