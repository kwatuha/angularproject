'use strict';

 var auth = angular.module('amrsAuth');
  auth.controller('LoginController', function ($scope,AuthService) {
    $scope.credentials = {
    username: '',
    password: ''
  };
  
  //authSearvice={};
    $scope.login = function (credentials) {
      
       AuthService.login(credentials);
    }  
  });
   