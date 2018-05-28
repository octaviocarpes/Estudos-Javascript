angular
  .module('directives', [])
  .directive('navBar', () => {
    let ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {};

    ddo.templateUrl = 'js/directives/templates/nav-bar.html';

    return ddo;
  })
  .directive('filmPoster', () => {
    let ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {
      image: '@'
    };

    ddo.templateUrl = 'js/directives/templates/film-poster.html';

    return ddo;
  })
  .directive('detailsData', () => {
    let ddo = {};

    ddo.restrict = 'AE';

    ddo.controller = 'dataController';

    ddo.templateUrl = 'js/directives/templates/details-data.html';

    return ddo;
  })
  .directive('detailsMenu', () => {
    let ddo = {};

    ddo.restrict = 'AE';

    ddo.controller = 'dataController';

    ddo.templateUrl = 'js/directives/templates/details-menu.html';

    return ddo;
  });
