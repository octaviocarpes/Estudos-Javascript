angular
  .module('directives', [])
  .directive('navBar', () => {
    let ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {};

    ddo.templateUrl = 'js/directives/nav-bar.html';

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
  })
  .directive('infoSquare', () => {
    let ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {
      icon: '@',
      title: '@'
    };

    ddo.templateUrl = 'js/directives/info-square.html';

    return ddo;
  });
