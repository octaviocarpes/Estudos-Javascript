angular.module('main').controller('filmsController', function($scope, filmResource, $http) {
  $scope.films = [];

  $http({
    method: 'GET',
    url: filmResource.filmUrl
  }).then(
    function successCallback(response) {
      $scope.films = response.data.results;
    }
  ).catch(
    function errorCallBack(response){
      console.log(response);
    }
  )
});
