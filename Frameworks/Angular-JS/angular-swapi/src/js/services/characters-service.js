angular.module('charactersService', []).factory('charactersService', $http => {
  let characters = [];
  return {
    getAll: url => {
      return $http.get(url, { cache: true });
    },
    characters
  };
});
