(function(){
  'use strict';
  angular.module(appObj.id).controller('imageCtl',imageCtl);
  imageCtl.$inject = ['$scope','$location'];
  function imageCtl($scope,$location){


$scope.umListModel = {}; //module name specification
   
    //$scope.umListModel.umAdd = umAdd;
    $scope.umListModel.hoverIn = hoverIn;
    $scope.umListModel.hoverOut = hoverOut;
     
   
   

    function hoverIn() {
      $scope.umListModel.hoverEdit = true;
    };

    function hoverOut() {
      $scope.umListModel.hoverEdit = false;
    };


  
    //ENO function initialization

    /* --sto add function--*/
   
    
    var imguL = '';


   
    $scope.umListModel.usrRes ={};

    $scope.photoChanged = function(files) {
      $scope.files = files;
      var reader = new FileReader();
      reader.onload = function(e) {
        $scope.umListModel.usrRes.empPic = e.target.result;
        console.log("image preview with base 64" , $scope.umListModel.usrRes.empPic)
        if (!$scope.$$phase) {
          $scope.$apply();
        }
      };
      reader.readAsDataURL(files[0]);

    };

  
  }




    


  
 })();
