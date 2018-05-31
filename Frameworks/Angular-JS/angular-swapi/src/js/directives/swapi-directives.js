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

    ddo.templateUrl = 'js/directives/templates/details-data.html';

    return ddo;
  })
  .directive('detailsMenu', () => {
    let ddo = {};

    ddo.restrict = 'AE';

    ddo.templateUrl = 'js/directives/templates/details-menu.html';

    return ddo;
  })
  .directive('searchBox', () => {
    let ddo = {};

    ddo.restrict = 'AE';

    ddo.templateUrl = 'js/directives/templates/search-box.html';

    return ddo;
  })
  .directive('characterCard', () => {
    let ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {
      image: '@',
      name: '@',
      url: '@'
    };

    ddo.templateUrl = 'js/directives/templates/character-card.html';

    return ddo;
  });
