angular.module('main',['ui.router']).config(['$stateProvider', function($stateProvider){
  $stateProvider
  .state({
    url:'/hello',
    name:'hello',
    template:'Hello world!'
  })
  .state({
    url:'/about',
    name:'about',
    template:'About'
  })
}]);
console.log('FUUUUCK')
