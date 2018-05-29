angular.module('charactersService', []).factory('charactersService', $http => {
  let characters = [];
  return {
    async: url => {
      return $http.get(url);
    },
    characters
  };
});
