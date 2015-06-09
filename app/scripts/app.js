'use strict';

/**
 * @ngdoc overview
 * @name angularopenmrsApp
 * @description
 * # angularopenmrsApp
 *
 * Main module of the application.
 */
angular
  .module('angularOpenMrsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'patientSearch',
    'amrsAuth'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'LoginController'
      })
      .when('/patient/search', {
        templateUrl: 'views/patient/patientsearch.html',
        controller: 'PatientSearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
