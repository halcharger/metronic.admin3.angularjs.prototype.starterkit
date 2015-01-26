'use strict';

describe('Controller: ModaldemoctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('metronicadmin3angularjsprototypestarterkitApp'));

  var ModaldemoctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModaldemoctrlCtrl = $controller('ModaldemoctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
