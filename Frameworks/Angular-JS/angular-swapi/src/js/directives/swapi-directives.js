angular
  .module('directives', [])
  .directive('filmCard', () => {
    let ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {
      title: '@',
      image: '@',
      crawl: '@',
      movieid: '@'
    };

    ddo.templateUrl = 'js/directives/film-card.html';

    return ddo;
  })
  .directive('filmPoster', () => {
    let ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {
      image: '@'
    };

    ddo.templateUrl = 'js/directives/film-poster.html';

    return ddo;
  });
