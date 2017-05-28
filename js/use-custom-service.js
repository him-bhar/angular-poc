var myApp = angular.module('myApp', []);

myApp.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

myApp.controller('myCtrl', function($scope, hexafy) {
  $scope.hex = hexafy.myFunc(255);
});

myApp.filter("myFormat", ["hexafy", function(hexafy) {
  return function(x) {
    return hexafy.myFunc(x);
  }
}]);

myApp.controller('arrayCtrl', function($scope) {
  $scope.counts = [255, 251, 200];
});