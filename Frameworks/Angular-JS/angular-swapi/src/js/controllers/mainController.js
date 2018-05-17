angular.module('main').controller('mainController', function($http, dataResource, filmResource) {
  $http
    .get(filmResource.filmUrl)
    .then(response => {
      document.querySelector('.progress').classList.add('hidden');
      dataResource.storeFilmData(response.data.results);
    })
    .catch(response => {
      console.log(response);
    });
});
