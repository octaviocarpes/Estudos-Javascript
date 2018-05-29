angular
  .module('main')
  .controller('filmsController', function(
    $scope,
    imagesResource,
    filmsService,
    charactersService,
    $stateParams
  ) {
    $scope.images = imagesResource.images;
    let films = [];
    let movieid = $stateParams.movieid;
    let filmCharacters = [];
    let filmSpecies = [];
    let filmPlanets = [];
    let filmStarships = [];
    let filmVehicles = [];

    filmsService
      .async()
      .then(response => {
        films = response.data.results;
        for (let i = 0; i < response.data.results.length; i++) {
          films[i].imageUrl = imagesResource.images[i].url;
        }
        $scope.films = films;

        films.forEach(element => {
          if (element.episode_id == movieid) {
            console.log(element);
            $scope.film = element;
          }
        });

        $scope.film.characters.forEach(element => {
          charactersService.async(element).then(response => {
            filmCharacters.push(response.data.name);
            $scope.characters = filmCharacters;
          });
        });

        document.querySelector('.page-box').classList.remove('hidden');
        document.querySelector('.pre-loader').classList.add('hidden');
      })
      .catch(response => {
        console.log(response);
      });
  });
