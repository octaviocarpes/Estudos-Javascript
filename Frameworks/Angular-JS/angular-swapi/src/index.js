require('./styles/css/main.css');
require('./styles/css/home.css');

document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems);
});

angular.module('main', ['ui.router']).config([
  '$stateProvider',
  '$locationProvider',
  function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state({
        url: '/',
        name: 'home',
        template: require('./components/home.html')
      })
      .state({
        url: '/films',
        name: 'films',
        template: require('./components/films.html')
      })
      .state({
        url: '/characters',
        name: 'characters',
        template: require('./components/characters.html')
      })
      .state({
        url: '/planets',
        name: 'planets',
        template: require('./components/planets.html')
      });
  }
]);
