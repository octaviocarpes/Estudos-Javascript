angular.module('speciesService', []).factory('speciesService', $http => {
  return {
    get: url => {
      return $http.get(url, { cache: true });
    }
  };
});
