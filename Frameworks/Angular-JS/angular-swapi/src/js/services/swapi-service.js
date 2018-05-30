angular.module('services', []).factory('imagesResource', () => {
  let filmImages = [];
  let characterImages = [];

  filmImages.push({
    url: '../styles/img/movie-posters/A New Hope.jpg',
    name: 'A New Hope'
  });
  filmImages.push({
    url: '../styles/img/movie-posters/Attack of the Clones.jpg',
    name: 'Attack of the Clones'
  });
  filmImages.push({
    url: '../styles/img/movie-posters/The Phantom Menace.jpg',
    name: 'The Phantom Menace'
  });
  filmImages.push({
    url: '../styles/img/movie-posters/Revenge of the Sith.jpg',
    name: 'Revenge of the Sith'
  });
  filmImages.push({
    url: '../styles/img/movie-posters/Return of the Jedi.jpg',
    name: 'Return of the Jedi'
  });
  filmImages.push({
    url: '../styles/img/movie-posters/The Empire Strikes Back.jpg',
    name: 'The Empire Strikes Back'
  });
  filmImages.push({
    url: '../styles/img/movie-posters/The Force Awakens.jpg',
    name: 'The Force Awakens'
  });

  characterImages.push({
    url:'../styles/img/characters/Luke Skywalker.jpg',
    name:'Luke Skywalker'
  });
  characterImages.push({
    url:'../styles/img/characters/C-3PO.jpeg',
    name:'C-3PO'
  });
  characterImages.push({
    url:'../styles/img/characters/R2-D2.jpg',
    name:'R2-D2'
  });
  characterImages.push({
    url:'../styles/img/characters/Darth Vader.jpg',
    name:'Darth Vader'
  });
  characterImages.push({
    url:'../styles/img/characters/Leia Organa.jpg',
    name:'Leia Organa'
  });
  characterImages.push({
    url:'../styles/img/characters/Owen Lars.jpg',
    name:'Owen Lars'
  });


  let imagesResource = {
    filmImages,
    characterImages
  };

  return imagesResource;
});
