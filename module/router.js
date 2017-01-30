(function() {
    'use strict';
    angular
      .module(appObj.id)
      .config(appConfig);
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
      //$urlRouterProvider.otherwise("/home");
      $stateProvider
        .state('/', {
            url: "/home",
            templateUrl: "login.html",
            controller: 'loginCtrl',

          }.state('/dashboard',{
              templateUrl: "dashboard.html",
          })

        })();

      
