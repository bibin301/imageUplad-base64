(function() {
  'use strict';
  angular
    .module(appObj.id)
    .config(appConfig);
  appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'loginCtrl',
      }).state('dashboard', {
        url: '/dashboard',
        templateUrl: "dashboard.html",
        controller: 'dashboardCtrl',
      }).
    state('dashboard.application', {
      url: '/app',
      templateUrl: "app.html",
      controller: 'imageCtl',
    }).state('dashboard.application1', {
      url: '/app1',
      templateUrl: "app1.html",
      //controller: 'dashboardCtrl',
    });
  }

})();
