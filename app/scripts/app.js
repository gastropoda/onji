'use strict';

/**
 * @ngdoc overview
 * @name onjiApp
 * @description
 * # onjiApp
 *
 * Main module of the application.
 */
angular
  .module('onjiApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/read', {
        templateUrl: 'views/read.html',
        controller: 'ReadCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/read'
      });
  });
