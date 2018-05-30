angular.module('starshipsService', []).factory('starshipsService', $http => {
  return {
    get: url => {
      return $http.get(url, { cache: true });
    }
  };
});
