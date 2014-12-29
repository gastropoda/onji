'use strict';

/**
 * @ngdoc function
 * @name onjiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onjiApp
 */
angular.module('onjiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
