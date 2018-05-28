angular.module('planetsService', []).factory('planetsService', $http => {
    return {
      getAll: url => {
        return $http.get(url);
      }
    };
  });
  