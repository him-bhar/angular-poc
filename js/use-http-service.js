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
  }).then(function mySuccess(response) {
    $scope.httpResponse = response.data;
    $scope.statusText = response.statusText;
    $scope.statusCode = response.status;
  }, function myError(response) {
    $scope.httpResponse = "dummy";
    $scope.statusText = response.statusText;
    $scope.statusCode = response.status;
  });
});

var jsonSampleCtrl = myApp.controller("jsonSampleCtrl", function($scope, $http) {
  $http({
    url : "https://www.w3schools.com/angular/customers.php",
    method : "GET" 
  }).then(function mySuccess(response) {
    $scope.data = response.data.records;
  }, function myError(response) {
    $scope.httpResponse = "dummy";
  });
});