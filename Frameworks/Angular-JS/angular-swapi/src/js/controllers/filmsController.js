angular
  .module('main')
  .controller('filmsController', function($scope, filmResource, dataResource, $http) {
    $scope.films = dataResource.filmsData;
    $scope.images = dataResource.images;
  });
