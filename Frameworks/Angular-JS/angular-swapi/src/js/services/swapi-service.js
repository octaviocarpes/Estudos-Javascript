angular
  .module('services', [])
  .factory('filmResource', () => {
    return {
      filmUrl: 'https://swapi.co/api/films'
    };
  })
  .factory('dataResource', () => {
    let filmsData = [];
    let charactersData = [];
    let planetsData = [];
    let images = [];

    images.push('../styles/img/star-wars-a-new-hope.jpg');
    images.push('../styles/img/star-wars-attack-of-the-clones.jpg');
    images.push('../styles/img/star-wars-the-phantom-menace.jpg');
    images.push('../styles/img/star-wars-revenge-of-the-sith.jpg');
    images.push('../styles/img/star-wars-return-of-the-jedi.jpg');
    images.push('../styles/img/star-wars-the-empire-strikes-back.jpg');
    images.push('../styles/img/star-wars-the-force-awakens.jpg');

    function storeFilmData(array) {
      array.forEach(element => {
        filmsData.push(element);
      });
    }

    function storeCharactersData(array) {
      array.forEach(element => {
        charactersData.push(element);
      });
    }

    function storePlanetsData(array) {
      array.forEach(element => {
        planetsData.push(element);
      });
    }

    let dataResource = {
      filmsData,
      charactersData,
      planetsData,
      images,
      storeFilmData,
      storeCharactersData,
      storePlanetsData
    };

    return dataResource;
});