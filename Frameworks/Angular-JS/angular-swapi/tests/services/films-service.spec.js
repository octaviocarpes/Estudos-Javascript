describe('filmsService test', () => {
  let filmsService;

  beforeEach(angular.mock.module('main'));

  beforeEach(
    inject(_filmsService_ => {
      filmsService = _filmsService_;
    })
  );
  it('Should exist', () => {
    expect(filmsService).toBeDefined();
  });
});

describe('filmsService.getAll() test', () => {
  let filmsService;

  beforeEach(angular.mock.module('main'));

  beforeEach(
    inject(_filmsService_ => {
      filmsService = _filmsService_;
    })
  );
  it('Should exist', () => {
    expect(filmsService.getAll()).toBeDefined();
  });
});

// TODO: fix this test
describe('filmsService.getAll() test', () => {
  let filmsService;

  beforeEach(angular.mock.module('main'));
  beforeEach(angular.mock.module('filmsService'));

  beforeEach(
    inject(_filmsService_ => {
      filmsService = _filmsService_;
      console.log(filmsService.getAll());
    })
  );
  it('Should return a Promise', () => {
    expect(filmsService.getAll()).toBeDefined();
  });
});

describe('filmsService.films test', () => {
  let filmsService;
  let result = [];

  beforeEach(angular.mock.module('main'));
  beforeEach(angular.mock.module('filmsService'));

  beforeEach(
    inject(_filmsService_ => {
      filmsService = _filmsService_;
    })
  );
  it('Should return a empty Array', () => {
    expect(filmsService.films).toEqual(result);
  });
});
