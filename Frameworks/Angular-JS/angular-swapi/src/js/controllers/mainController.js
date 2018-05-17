angular.module('main').controller('mainController', function($http, dataResource, filmResource) {
  $http
    .get(filmResource.filmUrl)
    .then(response => {
      dataResource.storeFilmData(response.data.results);
    })
    .catch(response => {
      console.log(response);
    });
});
