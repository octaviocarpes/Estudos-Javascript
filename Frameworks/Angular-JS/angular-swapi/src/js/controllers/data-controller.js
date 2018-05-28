angular.module('main').controller('dataController', $scope => {
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

  $scope.content = {
    value: ''
  };

  $scope.setContent = function(headerTitle, dataContent) {
    $scope.header.value = headerTitle;
    let items = document.querySelectorAll('.menu-item');
    items.forEach(element => {
      element.classList.remove('is-active');
    });
    document.getElementById(headerTitle).classList.add('is-active');
    $scope.content = dataContent;
  };
});
