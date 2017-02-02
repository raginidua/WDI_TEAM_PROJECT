angular
  .module('teamBuilder')
  .config(Interceptor);

//custom elements returned from AuthInterceptor pushed into
//$httpProvider interceptor options array
Interceptor.$inject = ['$httpProvider'];
function Interceptor($httpProvider){
  return $httpProvider.interceptors.push('AuthInterceptor');
}
