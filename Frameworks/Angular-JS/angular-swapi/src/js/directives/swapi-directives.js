angular.module('directives', []).directive('filmCard', () => {
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
});
