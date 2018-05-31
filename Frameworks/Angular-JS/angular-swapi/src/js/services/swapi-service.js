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

  // Characters Image

  characterImages.push({
    url: '../styles/img/characters/Luke Skywalker.jpg',
    name: 'Luke Skywalker'
  });
  characterImages.push({
    url: '../styles/img/characters/C-3PO.jpeg',
    name: 'C-3PO'
  });
  characterImages.push({
    url: '../styles/img/characters/R2-D2.jpg',
    name: 'R2-D2'
  });
  characterImages.push({
    url: '../styles/img/characters/Darth Vader.jpg',
    name: 'Darth Vader'
  });
  characterImages.push({
    url: '../styles/img/characters/Leia Organa.jpg',
    name: 'Leia Organa'
  });
  characterImages.push({
    url: '../styles/img/characters/Owen Lars.jpg',
    name: 'Owen Lars'
  });
  characterImages.push({
    url: '../styles/img/characters/Beru Whitesun lars.jpg',
    name: 'Beru Whitesun lars'
  });
  characterImages.push({
    url: '../styles/img/characters/R5-D4.jpeg',
    name: 'R5-D4'
  });
  characterImages.push({
    url: '../styles/img/characters/Biggs Darklighter.jpg',
    name: 'Biggs Darklighter'
  });
  characterImages.push({
    url: '../styles/img/characters/Obi-Wan Kenobi.jpg',
    name: 'Obi-Wan Kenobi'
  });
  characterImages.push({
    url: '../styles/img/characters/Anakin Skywalker.jpg',
    name: 'Anakin Skywalker'
  });
  characterImages.push({
    url: '../styles/img/characters/Wilhuff Tarkin.jpg',
    name: 'Wilhuff Tarkin'
  });
  characterImages.push({
    url: '../styles/img/characters/Chewbacca.jpeg',
    name: 'Chewbacca'
  });
  characterImages.push({
    url: '../styles/img/characters/Han Solo.jpg',
    name: 'Han Solo'
  });
  characterImages.push({
    url: '../styles/img/characters/Greedo.jpg',
    name: 'Greedo'
  });
  characterImages.push({
    url: '../styles/img/characters/Jabba Desilijic Tiure.png',
    name: 'Jabba Desilijic Tiure'
  });
  characterImages.push({
    url: '../styles/img/characters/Wedge Antilles.jpeg',
    name: 'Wedge Antilles'
  });
  characterImages.push({
    url: '../styles/img/characters/Jek Tono Porkins.png',
    name: 'Jek Tono Porkins'
  });
  characterImages.push({
    url: '../styles/img/characters/Yoda.jpg',
    name: 'Yoda'
  });
  characterImages.push({
    url: '../styles/img/characters/Palpatine.jpg',
    name: 'Palpatine'
  });
  characterImages.push({
    url: '../styles/img/characters/Boba Fett.jpg',
    name: 'Boba Fett'
  });
  characterImages.push({
    url: '../styles/img/characters/IG-88.jpg',
    name: 'IG-88'
  });
  characterImages.push({
    url: '../styles/img/characters/Bossk.jpg',
    name: 'Bossk'
  });
  characterImages.push({
    url: '../styles/img/characters/Lando Calrissian.jpg',
    name: 'Lando Calrissian'
  });
  characterImages.push({
    url: '../styles/img/characters/Lobot.jpeg',
    name: 'Lobot'
  });
  characterImages.push({
    url: '../styles/img/characters/Ackbar.jpeg',
    name: 'Ackbar'
  });
  characterImages.push({
    url: '../styles/img/characters/Mon Mothma.jpg',
    name: 'Mon Mothma'
  });
  characterImages.push({
    url: '../styles/img/characters/Arvel Crynyd.jpg',
    name: 'Arvel Crynyd'
  });
  characterImages.push({
    url: '../styles/img/characters/Wicket Systri Warrick.png',
    name: 'Wicket Systri Warrick'
  });
  characterImages.push({
    url: '../styles/img/characters/Nien Nunb.jpg',
    name: 'Nien Nunb'
  });
  characterImages.push({
    url: '../styles/img/characters/Qui-Gon Jinn.jpg',
    name: 'Qui-Gon Jinn'
  });
  characterImages.push({
    url: '../styles/img/characters/Nute Gunray.jpeg',
    name: 'Nute Gunray'
  });
  characterImages.push({
    url: '../styles/img/characters/Finis Valorum.jpeg',
    name: 'Finis Valorum'
  });
  characterImages.push({
    url: '../styles/img/characters/Padmé Amidala.jpg',
    name: 'Padmé Amidala'
  });
  characterImages.push({
    url: '../styles/img/characters/Jar Jar Binks.jpeg',
    name: 'Jar Jar Binks'
  });
  characterImages.push({
    url: '../styles/img/characters/Roos Tarpals.jpg',
    name: 'Roos Tarpals'
  });
  characterImages.push({
    url: '../styles/img/characters/Rugor Nass.jpg',
    name: 'Rugor Nass'
  });
  characterImages.push({
    url: '../styles/img/characters/Ric Olié.jpeg',
    name: 'Ric Olié'
  });
  characterImages.push({
    url: '../styles/img/characters/Watto.jpeg',
    name: 'Watto'
  });
  characterImages.push({
    url: '../styles/img/characters/Sebulba.jpeg',
    name: 'Sebulba'
  });
  characterImages.push({
    url: '../styles/img/characters/Quarsh Panaka.jpg',
    name: 'Quarsh Panaka'
  });
  characterImages.push({
    url: '../styles/img/characters/Shmi Skywalker.jpg',
    name: 'Shmi Skywalker'
  });
  characterImages.push({
    url: '../styles/img/characters/Darth Maul.jpg',
    name: 'Darth Maul'
  });
  characterImages.push({
    url: '../styles/img/characters/Bib Fortuna.jpeg',
    name: 'Bib Fortuna'
  });
  characterImages.push({
    url: '../styles/img/characters/Ayla Secura.jpg',
    name: 'Ayla Secura'
  });
  characterImages.push({
    url: '../styles/img/characters/Ratts Tyerell.jpeg',
    name: 'Ratts Tyerell'
  });
  characterImages.push({
    url: '../styles/img/characters/Dud Bolt.png',
    name: 'Dud Bolt'
  });
  characterImages.push({
    url: '../styles/img/characters/Gasgano.jpeg',
    name: 'Gasgano'
  });
  characterImages.push({
    url: '../styles/img/characters/Ben Quadinaros.png',
    name: 'Ben Quadinaros'
  });
  characterImages.push({
    url: '../styles/img/characters/Mace Windu.jpeg',
    name: 'Mace Windu'
  });
  characterImages.push({
    url: '../styles/img/characters/Ki-Adi-Mundi.jpeg',
    name: 'Ki-Adi-Mundi'
  });
  characterImages.push({
    url: '../styles/img/characters/Kit Fisto.jpeg',
    name: 'Kit Fisto'
  });
  characterImages.push({
    url: '../styles/img/characters/Eeth Koth.jpeg',
    name: 'Eeth Koth'
  });
  characterImages.push({
    url: '../styles/img/characters/Adi Gallia.jpeg',
    name: 'Adi Gallia'
  });
  characterImages.push({
    url: '../styles/img/characters/Saesee Tiin.jpeg',
    name: 'Saesee Tiin'
  });
  characterImages.push({
    url: '../styles/img/characters/Yarael Poof.jpg',
    name: 'Yarael Poof'
  });
  characterImages.push({
    url: '../styles/img/characters/Plo Koon.jpg',
    name: 'Plo Koon'
  });
  characterImages.push({
    url: '../styles/img/characters/Mas Amedda.jpeg',
    name: 'Mas Amedda'
  });
  characterImages.push({
    url: '../styles/img/characters/Gregar Typho.jpeg',
    name: 'Gregar Typho'
  });
  characterImages.push({
    url: '../styles/img/characters/Cordé.jpg',
    name: 'Cordé'
  });
  characterImages.push({
    url: '../styles/img/characters/Cliegg Lars.jpg',
    name: 'Cliegg Lars'
  });
  characterImages.push({
    url: '../styles/img/characters/Poggle the Lesser.jpg',
    name: 'Poggle the Lesser'
  });
  characterImages.push({
    url: '../styles/img/characters/Luminara Unduli.jpeg',
    name: 'Luminara Unduli'
  });
  characterImages.push({
    url: '../styles/img/characters/Barriss Offee.jpg',
    name: 'Barriss Offee'
  });
  characterImages.push({
    url: '../styles/img/characters/Dormé.jpg',
    name: 'Dormé'
  });
  characterImages.push({
    url: '../styles/img/characters/Dooku.jpg',
    name: 'Dooku'
  });
  characterImages.push({
    url: '../styles/img/characters/Bail Prestor Organa.jpg',
    name: 'Bail Prestor Organa'
  });
  characterImages.push({
    url: '../styles/img/characters/Jango Fett.jpg',
    name: 'Jango Fett'
  });
  characterImages.push({
    url: '../styles/img/characters/Zam Wesell.jpg',
    name: 'Zam Wesell'
  });
  characterImages.push({
    url: '../styles/img/characters/Dexter Jettster.jpg',
    name: 'Dexter Jettster'
  });
  characterImages.push({
    url: '../styles/img/characters/Lama Su.jpeg',
    name: 'Lama Su'
  });
  characterImages.push({
    url: '../styles/img/characters/Taun We.jpg',
    name: 'Taun We'
  });
  characterImages.push({
    url: '../styles/img/characters/Jocasta Nu.jpeg',
    name: 'Jocasta Nu'
  });
  characterImages.push({
    url: '../styles/img/characters/R4-P17.jpeg',
    name: 'R4-P17'
  });
  characterImages.push({
    url: '../styles/img/characters/Wat Tambor.jpg',
    name: 'Wat Tambor'
  });
  characterImages.push({
    url: '../styles/img/characters/San Hill.jpg',
    name: 'San Hill'
  });
  characterImages.push({
    url: '../styles/img/characters/Shaak Ti.jpg',
    name: 'Shaak Ti'
  });
  characterImages.push({
    url: '../styles/img/characters/Grievous.jpeg',
    name: 'Grievous'
  });
  characterImages.push({
    url: '../styles/img/characters/Tarfful.jpg',
    name: 'Tarfful'
  });
  characterImages.push({
    url: '../styles/img/characters/Raymus Antilles.jpg',
    name: 'Raymus Antilles'
  });
  characterImages.push({
    url: '../styles/img/characters/Sly Moore.jpeg',
    name: 'Sly Moore'
  });
  characterImages.push({
    url: '../styles/img/characters/Tion Medon.jpg',
    name: 'Tion Medon'
  });
  characterImages.push({
    url: '../styles/img/characters/Finn.jpg',
    name: 'Finn'
  });
  characterImages.push({
    url: '../styles/img/characters/Rey.jpg',
    name: 'Rey'
  });
  characterImages.push({
    url: '../styles/img/characters/Poe Dameron.jpg',
    name: 'Poe Dameron'
  });
  characterImages.push({
    url: '../styles/img/characters/BB8.png',
    name: 'BB8'
  });

  let imagesResource = {
    filmImages,
    characterImages
  };

  return imagesResource;
});
