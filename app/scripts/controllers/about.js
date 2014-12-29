'use strict';

/**
 * @ngdoc function
 * @name onjiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the onjiApp
 */
angular.module('onjiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
