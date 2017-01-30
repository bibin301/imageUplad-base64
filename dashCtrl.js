(function(){
  angular.module(appObj.id).controller('dashboardCtrl',dashboardCtrl);
  dashboardCtrl.$inject = ['$scope'];
  function dashboardCtrl($scope){

    $scope.leftShow = true;

  }

})();
