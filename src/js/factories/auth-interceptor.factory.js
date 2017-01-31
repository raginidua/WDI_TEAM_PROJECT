angular
  .module('teamBuilder')
  .factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = [];
function AuthInterceptor() {
  return {
    request: function(config){
      console.log('Interceptor config:', config);
      return (config);
    },
    response: function(res) {
      console.log('Interceptor response', res);
      return res;
    }
  };
}
