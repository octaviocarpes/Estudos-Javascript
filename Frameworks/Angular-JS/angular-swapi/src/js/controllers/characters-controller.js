angular
  .module('main')
  .controller('charactersController', ($scope, $stateParams, charactersService, imagesResource) => {
    let charactersNumber = 0;
    let characters = [];
    let characterId = $stateParams.characterId;

    charactersService
      .getAll()
      .then(response => {
        charactersNumber = response.data.count;
        for (let index = 1; index <= charactersNumber; index++) {
          if (index == 17) {
            continue;
          }
          charactersService
            .get('https://swapi.co/api/people/' + index)
            .then(response => {
              let character = response.data;
              character.id = index;
              character.imageUrl = attachImageToCharacter(character.name);
              character.characterUrl = 'character({ characterId: ' + character.id + '})';
              characters.push(character);
              if (characters.length == charactersNumber - 1) {
                $scope.characters = characters;
                document.querySelector('.pre-loader').classList.add('hidden');
                document.querySelector('.content').classList.remove('hidden');
              }
              if (characterId == character.id) {
                $scope.character = character;
                let characterHomeworld = '';
                let characterFilms = [];
                let characterSpecie = '';

                charactersService.get(character.homeworld).then(response => {
                  characterHomeworld = response.data.name;
                  $scope.character.homeworld = characterHomeworld;
                });
              }
            })
            .catch(response => {
              console.log('Error getting character');
            });
        }
      })
      .catch(response => {
        console.log('Error getting characters');
      });

    function attachImageToCharacter(characterName) {
      let url = '';

      imagesResource.characterImages.forEach(element => {
        if (element.name == characterName) {
          url = element.url;
        }
      });
      return url;
    }
  });
