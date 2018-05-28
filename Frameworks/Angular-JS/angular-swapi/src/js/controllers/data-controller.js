angular.module('main').controller('dataController', ($scope, charactersService) => {
  $scope.title = {
    characters: 'Characters',
    species: 'Species',
    planets: 'Planets',
    starships: 'Starships',
    vehicles: 'Vehicles'
  };

  $scope.header = {
    value: 'Characters'
  };

  let contentArray = [];

  $scope.setContent = function(headerTitle, dataContent) {
    contentArray = [];
    $scope.header.value = headerTitle;
    $scope.content = '';
    document.querySelector('.message-box').classList.remove('hidden');

    let items = document.querySelectorAll('.menu-item');
    items.forEach(element => {
      element.classList.remove('is-active');
    });
    document.getElementById(headerTitle).classList.add('is-active');
    for(let i = 0; i < dataContent.length; i++){
      charactersService
      .getAll(dataContent[i])
      .then(response => {
        contentArray.push(response.data.name);
        $scope.content = contentArray;
      })
      .catch(response => {
        console.log(response);
      });
    }
  };

});
