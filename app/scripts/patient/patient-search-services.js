'use strict';
  var search = angular.module('patientSearch');
      search.factory('PatientSearchService',['$http','$resource','AuthService','AUTH_EVENTS', function ($http,$resource,AuthService,AUTH_EVENTS) {
        var patientSearchService = {};
                  
          patientSearchService.find = function (patientUuid) {
                console.log("Running Patient Search===="+patientUuid);
                
                console.log(" Authorixed to "+AuthService.getCurrentStatus());
                console.log(" Authorixed to SSS"+AUTH_EVENTS.loginSuccess);
                console.log(" Authorixed to Failed"+AUTH_EVENTS.loginFailed);
          };
        return patientSearchService;
}])
