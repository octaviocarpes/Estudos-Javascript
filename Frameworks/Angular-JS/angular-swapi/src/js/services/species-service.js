angular.module('speciesService', []).factory('speciesService', $http => {
  return {
    getAll: url => {
      return $http.get(url);
    }
  };
});
