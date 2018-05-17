angular.module('directives', [])
  .directive('card', () => {
  let ddo = {};

  ddo.restrict = 'AE';

  ddo.scope = {
    title: '@',
    image: '@',
    crawl: '@'
  };

  ddo.templateUrl = 'js/directives/card.html';

  return ddo;
})
