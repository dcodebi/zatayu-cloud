'use strict';
//var routeApp = angular.module('users', []);
userApp.controller('logoutController', function($scope, $http, $location,$rootScope,$cookieStore) {
		$scope.title = "Zatayu - Cloud - Sign - In";
		// If user is signed in then redirect back home
		$rootScope.user = null;
		$cookieStore.remove('LoggedInUser');
		$location.path('/signin');
	});