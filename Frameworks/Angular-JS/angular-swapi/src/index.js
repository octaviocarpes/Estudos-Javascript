import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
angular.module('main', [uiRouter]);

angular.module('main').config(function($stateProvider) {
  let homeState = {
    name: 'home',
    url: '/',
    template: '<h1>Home Page</h1>'
  };
  $stateProvider.state(homeState);
});
