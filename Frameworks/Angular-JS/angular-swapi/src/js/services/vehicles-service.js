angular.module('vehiclesService', []).factory('vehiclesService', $http => {
    return {
      getAll: url => {
        return $http.get(url);
      }
    };
  });
  