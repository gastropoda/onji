'use strict';

describe('Controller: ReadCtrl', function () {

  // load the controller's module
  beforeEach(module('onjiApp'));

  var ReadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReadCtrl = $controller('ReadCtrl', {
      $scope: scope
    });
  }));

});
