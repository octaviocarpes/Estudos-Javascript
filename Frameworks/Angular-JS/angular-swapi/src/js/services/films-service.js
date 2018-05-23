angular.module('filmsService', []).factory('filmsService', $http => {
  let films = [];

  function setFilms(filmsArray) {
    films = filmsArray;
  }

  return {
    async: () => {
      return $http.get('https://swapi.co/api/films', { cache: true });
    },
    films,
    setFilms
  };
});
