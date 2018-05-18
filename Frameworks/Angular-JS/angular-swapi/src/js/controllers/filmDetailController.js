angular.module('main').controller('filmDetailController', ($scope, dataResource, $stateParams) => {
  $scope.film = {};

  let selectedFilm = dataResource.filmsData.filter( (element) => {
    console.log('element: ' + element.episode_id);
    return element.episode_id == $stateParams.movieid;
  });

  $scope.film = selectedFilm[0];
});
