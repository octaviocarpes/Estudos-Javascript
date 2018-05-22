angular
  .module('main')
  .controller('filmDetailController', ($scope, imagesResource, $stateParams, filmsService) => {
    let movieid = $stateParams.movieid;
    let films = [];

    filmsService.async()
    .then( (response) => {
      films = response.data.results;
       let selectedFilm = films.map( (movieid) => {
        return movieid;
      });
      $scope.film = selectedFilm[0];
    })
    .catch( (response) => {
      console.log(response);
    });
    
  });
