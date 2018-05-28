angular.module('charactersService', []).factory('charactersService', $http => {

  return {
    getAll: (url) => {
      return $http.get(url);
    }
  };
});
