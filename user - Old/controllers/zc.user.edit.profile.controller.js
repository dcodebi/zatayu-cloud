'use strict';
//var routeApp = angular.module('users', []);
userApp.controller('editprofileController', function($scope, $http, $location, $rootScope, $cookieStore) {
		$scope.title = "Zatayu - Cloud - Edit Profile";
		var userCookie = $cookieStore.get('LoggedInUser');
		//alert($cookieStore.get('LoggedInUser'));
		if($cookieStore.get('LoggedInUser')==null || $cookieStore.get('LoggedInUser')=="" || $cookieStore.get('LoggedInUser') == 'undefined') {
			$location.path('/signin');
		}
		// To update user profile
		/*$scope.updateprofile = function() {			
			$http.post('/auth/UserUpdate', $scope.UserProfile).success(function(response) {								
				// And redirect to the index page
				$location.path('../view/zc.user.home.view.html');
			}).error(function(response) {
				$scope.error = response.message;
			});*/
		//};
	});