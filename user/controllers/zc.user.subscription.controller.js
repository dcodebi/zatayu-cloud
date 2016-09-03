'use strict';
//var routeApp = angular.module('users', []);
userApp.controller('subscriptionController', function($scope, $http, $location, $rootScope, $cookieStore) {
		$scope.title = "Zatayu - Cloud - Subscriptions";
		var userCookie = $cookieStore.get('LoggedInUser');
		//alert($cookieStore.get('LoggedInUser'));
		if($cookieStore.get('LoggedInUser')==null || $cookieStore.get('LoggedInUser')=="" || $cookieStore.get('LoggedInUser') == 'undefined') {
			$location.path('/signin');
		}

		/*$http.post('/auth/getSubscriptionDetails', $scope.user).success(function(response) {								
			$scope.subscriptionsDetails = response.data;
			}).error(function(response) {
				$scope.error = response.message;
			});*/
			$scope.subscriptionsDetails = [{"Se":"1","Sr":"one","CL":"four","planType":"Free Trial","user":"Single","space": "15 MB Space","validity": "15 Days Validity","cost":"0"},
											{"Se":"2","Sr":"two","CL":"five","planType":"Basic","user":"Upto 5 User","space": "2 GB Space","validity": "12 Months Validity","cost":"10000"},
											{"Se":"3","Sr":"three","CL":"six","planType":"Standard","user":"Upto 20 User","space": "5 GB Space","validity": "12 Months Validity","cost":"20000"},
											{"Se":"4","Sr":"four","CL":"seven","planType":"Premium","user":"Upto 50 User","space": "10 GB Space","validity": "12 Months Validity","cost":"35000"}];

		//$scope.subscription = 0;
		$scope.submitResult = function() {	
		alert(this.subscriptionAmount);    
		    $scope.totalAmount = this.subscriptionAmount;
		  };
											
	});