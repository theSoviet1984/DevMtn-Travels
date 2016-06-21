angular.module('devmtnTravel').controller('packagesCtrl',function($scope, $state, mainSrv){

$scope.packages=mainSrv.travelInfo;
})
