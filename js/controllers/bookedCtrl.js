angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $state, mainSrv,$stateParams){


  $scope.travelInfo=mainSrv.travelInfo;

  //console.log($scope.travelInfo.length);
 $scope.getBookedInfo=function(){
  var id= parseInt($stateParams.id)
  for (var i = 0; i < $scope.travelInfo.length; i++) {
    if (id === $scope.travelInfo[i].id) {
      $scope.bookedCity = $scope.travelInfo[i].city
    };
     console.log($scope.travelInfo[i]);
    }
  }


})
