describe('Sums 2 times 2', () => {
  it('Should return 4', () => {
    expect(2 + 2).toEqual(4);
  });
});

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

    beforeEach(inject(_filmsService_ => {
        filmsService = _filmsService_;
    }));
    it('Should return a Promise', () => {
        expect(filmsService.getAll()).toEqual(new Promise);
    });
});
