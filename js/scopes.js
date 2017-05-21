var myAppModule = angular.module("myApp", []);

var myCtrl = myAppModule.controller("myCtrl", function($scope) {
  $scope.color = "Red";
});

var testCtrl = myAppModule.controller("testCtrl", function($rootScope) {
  $rootScope.color = "Green";
});