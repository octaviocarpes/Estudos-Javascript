angular.module('services', ['ngResource']).factory('filmResource', function() {
  return {
    filmUrl: 'https://swapi.co/api/films'
  };
});
