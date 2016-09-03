'use strict';
//var routeApp = angular.module('users', []);
userApp.controller('signUpController', function($scope, $http, $location,$rootScope) {
		$scope.title = "Zatayu - Cloud - Sign - Up";
		//If user is signed in then redirect back home
		//$location.path('/signin');
		$scope.signup = function() {
			//$http.post('/auth/signup', this.SignUpUser).success(function(response) {
			//$scope.userData = response.data;
			//}).error(function(response) {
				//$scope.error = response.message;
			//});
			$location.path('/thanks');
		};	
	});