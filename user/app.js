// create the module and name it userApp
        // also include ngRoute for all our routing needs
    var userApp = angular.module('userApp', ['ngRoute','ngCookies']);
    // configure our routes
   
    userApp.config(function($routeProvider) {
        
        $routeProvider

            // route for the default on sign up page
            .when('/', {
                templateUrl : 'views/zc.user.signup.view.html',
                controller  : 'signUpController'
            })

            // route for the sign up page
            .when('/signup', {
                templateUrl : 'views/zc.user.signup.view.html',
                controller  : 'signUpController'
            })

            // route for the sign page
            .when('/signin', {
                templateUrl : 'views/zc.user.signin.view.html',
                controller  : 'signInController'
            })
            // route for the home page
            .when('/home', {
                templateUrl : 'views/zc.user.home.view.html',
                controller  : 'homeController'
            })
            // route for the subscription page
            .when('/subscription', {
                templateUrl : 'views/zc.user.subscription.view.html',
                controller  : 'subscriptionController'
            })
            // route for the edit user profile page
            .when('/editProfile', {
                templateUrl : 'views/zc.user.edit.profile.view.html',
                controller  : 'editprofileController'
            })            
            // route for the thanks page
            .when('/thanks', {
                templateUrl : 'views/zc.user.thanks.view.html',
            })
            // route for the sign in page after logout
            .when('/logout', {
                templateUrl : 'views/zc.user.signin.view.html',
                controller  : 'logoutController'
            });  
    });