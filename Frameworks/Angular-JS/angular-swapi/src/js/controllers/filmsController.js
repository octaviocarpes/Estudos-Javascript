angular
  .module('main')
  .controller('filmsController', function($scope, imagesResource, filmsService) {
    $scope.images = imagesResource.images;
    let films = [];

    filmsService
      .async()
      .then(response => {
        films = response.data.results;
        for (let i = 0; i < response.data.results.length; i++) {
          films[i].imageUrl = imagesResource.images[i].url;
        }

        $scope.films = films;
        document.querySelector('.progress').classList.add('hidden');
      })
      .catch(response => {
        console.log(response);
      });
  });
