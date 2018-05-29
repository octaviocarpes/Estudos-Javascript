import { concatAll } from 'rxjs/operator/concatAll';

angular
  .module('main')
  .controller('filmsController', function(
    $scope,
    imagesResource,
    filmsService,
    charactersService,
    speciesService,
    planetsService,
    starshipsService,
    vehiclesService,
    $stateParams
  ) {
    $scope.images = imagesResource.images;

    $scope.title = {
      characters: 'Characters',
      species: 'Species',
      planets: 'Planets',
      starships: 'Starships',
      vehicles: 'Vehicles'
    };

    let films = [];
    let movieid = $stateParams.movieid;
    let filmCharacters = [];
    let filmSpecies = [];
    let filmPlanets = [];
    let filmStarships = [];
    let filmVehicles = [];

    filmsService
      .getAll()
      .then(response => {
        films = response.data.results;
        for (let i = 0; i < response.data.results.length; i++) {
          films[i].imageUrl = imagesResource.images[i].url;
        }
        $scope.films = films;

        films.forEach(element => {
          if (element.episode_id == movieid) {
            $scope.film = element;
            document.querySelector('.page-box').classList.remove('hidden');
            document.querySelector('.pre-loader').classList.add('hidden');
          }
        });

        callSWAPIforCharacters();
        callSWAPIforSpecies();
        callSWAPIforPlanets();
        callSWAPIforStarships();
        callSWAPIforVehicles();
      })
      .catch(response => {
        console.log(response);
      });

    $scope.setContent = (title, content) => {
      $scope.content = {};
      $scope.content = {
        header: title,
        data: content
      };
      let id = title.toLowerCase();
      document.querySelector('.message-box').classList.remove('hidden');
      let buttons = document.querySelectorAll('.menu-item');
      buttons.forEach(element => {
        element.classList.remove('is-focused');
      });
      document.getElementById(id).classList.add('is-focused');
    };

    function callSWAPIforCharacters() {
      $scope.film.characters.forEach(element => {
        charactersService.getAll(element).then(response => {
          filmCharacters.push(response.data.name);
          if ($scope.film.characters.length == filmCharacters.length) {
            $scope.characters = filmCharacters;
            document.getElementById('characters').classList.remove('is-loading');
          }
        });
      });
    }

    function callSWAPIforSpecies() {
      $scope.film.species.forEach(element => {
        speciesService.getAll(element).then(response => {
          filmSpecies.push(response.data.name);
          if ($scope.film.species.length == filmSpecies.length) {
            $scope.species = filmSpecies;
            document.getElementById('species').classList.remove('is-loading');
          }
        });
      });
    }

    function callSWAPIforPlanets() {
      $scope.film.planets.forEach(element => {
        planetsService.getAll(element).then(response => {
          filmPlanets.push(response.data.name);
          if ($scope.film.planets.length == filmPlanets.length) {
            $scope.planets = filmPlanets;
            document.getElementById('planets').classList.remove('is-loading');
          }
        });
      });
    }

    function callSWAPIforStarships() {
      $scope.film.starships.forEach(element => {
        starshipsService.getAll(element).then(response => {
          filmStarships.push(response.data.name);
          if ($scope.film.starships.length == filmStarships.length) {
            $scope.starships = filmStarships;
            document.getElementById('starships').classList.remove('is-loading');
          }
        });
      });
    }

    function callSWAPIforVehicles() {
      if ($scope.film.vehicles.length == 0) {
        document.getElementById('vehicles').classList.remove('is-loading');
        $scope.vehicles = ['There are no Vehicles data for this film.'];
      }
      $scope.film.vehicles.forEach(element => {
        vehiclesService.getAll(element).then(response => {
          filmVehicles.push(response.data.name);
          if ($scope.film.vehicles.length == filmVehicles.length) {
            $scope.vehicles = filmVehicles;
            document.getElementById('vehicles').classList.remove('is-loading');
          }
        });
      });
    }
  });
