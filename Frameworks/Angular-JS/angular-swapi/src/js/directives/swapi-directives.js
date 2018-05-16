angular.module('directives', []).directive('film-card', function() {
  let ddo = {};

  ddo.restrict = 'AE';

  ddo.scope = {
    title: '@'
  };

  ddo.templateUrl = '../../components/card.html';

  return ddo;
});
