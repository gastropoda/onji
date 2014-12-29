'use strict';

describe('Controller: CreateCtrl', function () {

  // load the controller's module
  beforeEach(module('onjiApp'));

  var CreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateCtrl = $controller('CreateCtrl', {
      $scope: scope
    });
  }));

  it('doesn\'t complain', function() {});
});
