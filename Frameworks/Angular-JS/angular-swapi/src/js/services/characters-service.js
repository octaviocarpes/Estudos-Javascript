angular.module('charactersService', []).factory('charactersService', $http => {
  let characters = [];
  return {
    get: url => {
      return $http.get(url, { cache: true });
    },
    getAll: () => {
      return $http.get('https://swapi.co/api/people', {cache:true});
    },
    characters
  };
});
