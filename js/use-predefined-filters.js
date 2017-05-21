var myApp = angular.module("myApp", []);

var myCtrl = myApp.controller("myCtrl", function($scope) {
  $scope.lastName = "Bhardwaj";
  $scope.amount = 10000;
  $scope.testDate = "2010-10-28";
  
  $scope.names = [
    {name:'Jani',country:'Norway'},
    {name:'Carl',country:'Sweden'},
    {name:'Margareth',country:'England'},
    {name:'Hege',country:'Norway'},
    {name:'Joe',country:'Denmark'},
    {name:'Gustav',country:'Sweden'},
    {name:'Birgit',country:'Denmark'},
    {name:'Mary',country:'England'},
    {name:'Kai',country:'Norway'}
    ];
});

var namesCtrl = myApp.controller("namesCtrl", function($scope) {
	$scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
});

var countryCtrl = myApp.controller("countriesCtrl", function($scope) {
  $scope.names = [
    {name:'Jani',country:'Norway'},
    {name:'Carl',country:'Sweden'},
    {name:'Margareth',country:'England'},
    {name:'Hege',country:'Norway'},
    {name:'Joe',country:'Denmark'},
    {name:'Gustav',country:'Sweden'},
    {name:'Birgit',country:'Denmark'},
    {name:'Mary',country:'England'},
    {name:'Kai',country:'Norway'}
  ];
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
});

myApp.filter("myFormat", function() {
  return function(input) {
//    alert(x);
    var i, c, txt = "";
    for (i = 0; i < input.length; i++) {
        c = input[i];
        if (i % 2 == 0) {
            c = c.toUpperCase();
        }
        txt += c;
    }
    return txt;
  };
});