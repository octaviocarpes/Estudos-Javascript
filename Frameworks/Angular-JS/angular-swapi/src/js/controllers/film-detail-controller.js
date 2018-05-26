angular
  .module('main')
  .controller('filmDetailController', ($scope, imagesResource, $stateParams, filmsService) => {
    let movieid = $stateParams.movieid;
    let film = {};
    let image = {};

    filmsService
      .async()
      .then(response => {
        document.querySelector('.page-box').classList.remove('hidden');
        document.querySelector('.pre-loader').classList.add('hidden');
        filmsService.films = response.data.results;

        for (let i = 0; i < response.data.results.length; i++) {
          filmsService.films[i].imageUrl = imagesResource.images[i].url;
        }

        for (let i = 0; i < filmsService.films.length; i++) {
          if (filmsService.films[i].episode_id == $stateParams.movieid) {
            film = filmsService.films[i];
            $scope.film = film;
          }
        }
      })
      .catch(response => {
        console.log(response);
      });
  });
