(function(){
  'use strict';
  angular.module(appObj.id).controller('loginCtrl',loginCtrl);
  loginCtrl.$inject = ['$scope','$location'];
  function loginCtrl($scope,$location){

    

    $scope.submit =function(us){
      console.log("get input value" , us);
      var uname= $scope.username;
      var upassword = $scope.password;
      if(us.name =='admin' && us.pass=='1234'){
        $location.path('/dashboard')
      }
    }

  }
})();
