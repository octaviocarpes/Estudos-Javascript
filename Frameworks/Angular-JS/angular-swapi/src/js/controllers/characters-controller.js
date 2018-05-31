angular
  .module('main')
  .controller('charactersController', ($scope, charactersService, imagesResource) => {
    let charactersNumber = 0;
    let characters = [];

    charactersService
      .getAll()
      .then(response => {
        charactersNumber = response.data.count;
        console.log(charactersNumber);
        for (let index = 1; index <= charactersNumber; index++) {
          charactersService
            .get('https://swapi.co/api/people/' + index)
            .then(response => {
              let character = response.data;
              character.id = index;
              character.imageUrl = attachImageToCharacter(character.name);
              characters.push(character);
              if (characters.length == charactersNumber - 1) {
                $scope.characters = characters;
                document.querySelector('.pre-loader').classList.add('hidden');
                document.querySelector('.content').classList.remove('hidden');
              }
            })
            .catch(response => {
              console.log(response);
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
