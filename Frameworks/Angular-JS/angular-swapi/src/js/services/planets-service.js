angular.module('planetsService', []).factory('planetsService', $http => {
  return {
    get: url => {
      return $http.get(url, { cache: true });
    }
  };
});
