describe('film-controller test', () => {
  beforeEach(angular.mock.module('main'));
  var $controller, $rootScope;

  beforeEach(
    inject(function(_$controller_, _$rootScope_) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
      $rootScope = _$rootScope_;
    })
  );

  it('Should exist', () => {
    expect($controller).toBeDefined();
  });
});

describe('film-controller films array test', () => {
  let films = [];

  beforeEach(angular.mock.module('main'));
  var $controller, $rootScope;

  beforeEach(
    inject(function(_$controller_, _$rootScope_) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
      $rootScope = _$rootScope_;
    })
  );

  describe('$scope.films', () => {
    it('Should exist', () => {
      let $scope = $rootScope.$new();
      let controller = $controller('filmsController', { $scope: $scope });
      $scope.films = [];
      expect($scope.films).toEqual(films);
    });
  });
});
