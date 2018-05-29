angular.module('starshipsService', []).factory('starshipsService', $http => {
  return {
    getAll: url => {
      return $http.get(url, { cache: true });
    }
  };
});
