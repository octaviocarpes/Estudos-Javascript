angular
  .module('main')
  .controller('filmsController', function($scope, dataResource, $http) {
    $scope.films = dataResource.filmsData;
    $scope.images = dataResource.images;
  });
