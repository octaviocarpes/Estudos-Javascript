require('../node_modules/materialize-css/dist/css/materialize.min.css');
require('./styles/css/main.css');
require('./styles/css/films.css');
import $ from 'jquery/dist/jquery.slim';

angular.module('main', ['ui.router', 'directives', 'services', 'filmsService']).config([
  '$stateProvider',
  '$locationProvider',
  function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state({
        url: '/',
        name: 'home',
        template: require('./pages/films.html')
      })
      .state({
        url: '/films',
        name: 'films',
        template: require('./pages/films.html')
      })
      .state({
        url: '/details/?{movieid}',
        name: 'details',
        template: require('./pages/film-info.html')
      })
      .state({
        url: '/characters',
        name: 'characters',
        template: require('./pages/characters.html')
      })
      .state({
        url: '/planets',
        name: 'planets',
        template: require('./pages/planets.html')
      });
  }
]);
require('./js/directives/swapi-directives.js');
require('./js/services/swapi-service.js');
require('./js/services/films-service.js');
require('./js/controllers/filmsController.js');
require('./js/controllers/filmDetailController.js');
