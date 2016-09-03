'use strict';
//var routeApp = angular.module('users', []);
userApp.controller('homeController', function($scope, $http, $location, $rootScope,$cookieStore) {
		$scope.title = "Zatayu - Cloud - Home";
		var userCookie = $cookieStore.get('LoggedInUser');
		if($cookieStore.get('LoggedInUser')==null || $cookieStore.get('LoggedInUser')=="" || $cookieStore.get('LoggedInUser') == 'undefined') {
			$location.path('/signin');
		}				
		$scope.subscriptiondetails = function() {
			/*$http.post('/user/getSubscriptionDetails', $rootScope.user).success(function(response) {								
				$scope.subscriptionDetails = response.data;
			}).error(function(response) {
				$scope.error = response.message;
			});*/
			$scope.subscriptionDetails = {"planType":"Free Trial","subscriptionDate":"01-Aug-2016","user":"Single","space": "15 MB","validity": "15 Days","nextRenewalDate": "01-Sep-2016","cost":"N/A","lastPaymentDetails":"N/A"};
		};
		$scope.faqs = function() {
			/*$http.post('/user/getFaqs', $rootScope.user).success(function(response) {								
				$scope.faqs = response.data;
			}).error(function(response) {
				$scope.error = response.message;
			});*/
			$scope.faqs = [{"Sr":"1","Q":"Can we upgrade the selected plan?","Ans":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"},
							{"Sr":"2","Q":"Is it user friendly or require expert?","Ans":"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor."},
							{"Sr":"3","Q":"Do I have to be a programmer to use BI Cloud Service?","Ans":"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor."},
							{"Sr":"4","Q":"Where is the data hosted, and how do I know it's secure?","Ans":" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor."},
							{"Sr":"5","Q":"How quickly can I start using BI Cloud Service?","Ans":"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor."}];
		};
		$scope.writeus = function() {
			/*$http.post('/user/getWriteUs', $rootScope.user).success(function(response) {								
				$scope.writeus = response.data;
			}).error(function(response) {
				$scope.error = response.message;
			});*/
			$scope.writeus = [{"clientName":"Niket","aboutClient":"Director of XYZ","comments":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"},
						  {"clientName":"Ankit","aboutClient":"Director of PQR","comments":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"},
							  {"clientName":"Dheeraj","aboutClient":"Director of ABC","comments":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"}];
		};	
		$scope.speakus = function() {
			/*$http.post('/user/getSpeakUs', $rootScope.user).success(function(response) {								
				$scope.speakus = response.data;
			}).error(function(response) {
				$scope.error = response.message;
			});*/
			$scope.speakus = [{"country":"INDIA","street":"C-8, SDA Complex","landmark":"IIT Delhi","postalCode":"110016","phone":"+91-11-460 66 309","email":"sales@zatayu.com"},
								{"country":"USA","street":"2443 Fillmore St","landmark":"San Francisco,CA","postalCode":"94115","phone":"670-898-2847","email":"info@zatayu.com"}];
		};
		$scope.whatsnew = function() {			
			/*$http.post('/user/getWhatsNew', $rootScope.user).success(function(response) {								
				$scope.whatsnew = response.data;
			}).error(function(response) {
				$scope.error = response.message;
			});*/
			//alert('Test');
			$scope.whatsnew = [{"Sr":"1","version":"Version - 1.0"},
								{"Sr":"2","version":"Version - 1.1 (Upcoming)"}];

			$scope.features = [{"version":"Version - 1.0","feature":"1","description":"Without cloud version"},
								{"version":"Version - 1.0","feature":"2","description":"Without advance charts"},
								{"version":"Version - 1.1 (Upcoming)","feature":"1","description":"With cloud version"},
								{"version":"Version - 1.1 (Upcoming)","feature":"2","description":"With advance charts"}];
		
		};
		$scope.changepassword = function() {
			$scope.dismiss();

		};	
		$scope.writefeedback = function() {
			$scope.dismiss();
			
		};			
});