(function() {
  'use strict';

  angular.module(appObj.id).controller('testCtrl', appCtrl);

  appCtrl.$inject = ['$scope'];

  function appCtrl($scope) {
    $scope.data = "hello";


  }

})();
