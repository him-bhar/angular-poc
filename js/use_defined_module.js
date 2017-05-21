/**
 * Defining module
 * 
 * NOTE-
 * The [] parameter in the module definition can be used to define dependent modules.
 * Without the [] parameter, you are not creating a new module, but retrieving an existing one.
 */
var app = angular.module("myApp", []);  //defined module here

/**
 * Defining a controller which is used in html
 */
app.controller("myCtrl", function($scope) {
	$scope.firstName="himanshu";
});

/**
 * Defining a directive
 * When it comes to using directive camel-casing is change to hyphenated string. 
 * So "testDirective" will become "test-directive"
 * 
 * To invoke the new directive, make an HTML element with the same tag name as the new directive. 
 * When naming a directive, you must use a camel case name, w3TestDirective, 
 * but when invoking it, you must use - separated name, w3-test-directive
 */
app.directive("testDirective", function() {
	return {
	  template: "This is the template message from directive"
	};
});

/**
 * Defining a controller which is used in html
 */
app.controller("myCtrl2", function($scope) {
  $scope.firstName="himanshu1234";
});

