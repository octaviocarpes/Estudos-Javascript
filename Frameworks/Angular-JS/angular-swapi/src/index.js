let app = angular.module('main', ['ui.router']);

app.config(function($stateProvider) {
  let homeState = {
    name: 'home',
    url: '/',
    template: '<h1>Home Page</h1>'
  };
  $stateProvider.state(homeState);
});
