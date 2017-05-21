var app = angular.module('myApp', []);
app.controller('locationCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});