angular
  .module('main')
  .controller('filmsController', function($scope, imagesResource, filmsService) {
    $scope.images = imagesResource.images;
    let films = [];

    filmsService
      .async()
      .then(response => {
        $scope.films = response.data.results;
        document.querySelector('.progress').classList.add('hidden');
      })
      .catch(response => {
        console.log(response);
      });
  });
