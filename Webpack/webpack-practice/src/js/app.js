export {app}
var app = console.log('Super Webpack POC');

angular.module('app',['ui.router']);
angular.module('app',['ui.router']).config(['$stateProvider','$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) { 
    $stateProvider.
    state('Page1', {
        url: '/home',
        templateUrl: require('../components/helloWorld.html')
    }).
     state('Page2', {
         url: '/about',
         templateUrl: require('../components/webpack.html')
     })
}]);