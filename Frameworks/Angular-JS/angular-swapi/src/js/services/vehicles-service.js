angular.module('vehiclesService', []).factory('vehiclesService', $http => {
  return {
    get: url => {
      return $http.get(url, { cache: true });
    }
  };
});
