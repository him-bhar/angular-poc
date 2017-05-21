var myApp = angular.module("myApp", []);

var myCtrl = myApp.controller("httpCtrl", function($scope, $http) {
	/*$http.get("https://www.w3schools.com/angular/welcome.htm").then(function(response) {
		$scope.httpResponse = response.data
	}, function(reason) {
	  alert (reason);
	}, function(response) {
	  alert (response);
	});*/
  $http({
    url : "https://www.w3schools.com/angular/welcome.htm",
    method : "GET" 
  }).then(function(response) {
    $scope.httpResponse = response.data
  }, function(reason) {
    alert (reason);
  }, function(response) {
    alert (response);
  });
});