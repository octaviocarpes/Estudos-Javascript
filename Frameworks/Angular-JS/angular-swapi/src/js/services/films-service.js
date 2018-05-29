angular.module('filmsService', []).factory('filmsService', $http => {
  let films = [];

  return {
    getAll: () => {
      return $http.get('https://swapi.co/api/films', { cache: true });
    },
    films
  };
});
