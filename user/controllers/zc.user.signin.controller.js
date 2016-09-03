'use strict';
//var routeApp = angular.module('users', []);
userApp.controller('signInController', function($scope, $http, $location,$rootScope,$cookieStore) {
		$scope.title = "Zatayu - Cloud - Sign - In";
		// If user is signed in then redirect back home
		$scope.invalidUserNameOrPwd = "";
		$scope.signin = function() {			
			//$http.post('/auth/signin', $scope.SignInUser).success(function(response) {
			//$rootScope.user = response.data;
			//}).error(function(response) {
			//	$scope.error = response.message;
			//});*/								
				// And redirect to the index page
			if((this.SignInUser.email == 'friends.pradeepv@gmail.com') || (this.SignInUser.password == 'test')){
				
				$rootScope.user = {"firstName":"Pradeep","lastName":"Kumar","emailId":"friends.pradeepv@gmail.com","contactNo": "918882542561","organization": "ZYZ","pinCode": "110030","address":"New Delhi"};
				$cookieStore.put('LoggedInUser',this.SignInUser.email);
				$location.path('/home');
			}
			else
			{
				$scope.invalidUserNameOrPwd = "Username or Password incorrect please try again.";
			}
			
		};

		$scope.forgotpassword = function() {
			$scope.dismiss();
			
		};	
	});