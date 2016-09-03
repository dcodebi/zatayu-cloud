angular.module('merchantApp', ['ui.router', 'ngAudio', 'ui.bootstrap', 'ngCookies', 'angularMoment', 'oitozero.ngSweetAlert', 'angular-loading-bar', 'ngAnimate', 'ngStorage', 'ordinal', 'ngFileUpload', 'uiGmapgoogle-maps', 'mgo-angular-wizard', 'ui.select2', 'frapontillo.bootstrap-switch', 'ui.tree', 'toastr', 'ordinal', 'notification'])
    .run(['$rootScope', '$state', '$cookies', 'ngAudio', '$notification', 'merchantRESTSvc', '$modal', function($rootScope, $state, $cookies, ngAudio, $notification, merchantRESTSvc, $modal) {
        $rootScope.handler = undefined;
        $rootScope.token = $cookies.get('token');
        $rootScope.isPaying = $cookies.get('isPaying') == 'true' ? true : false;
        $rootScope.subscribed_store = $cookies.get('subscribed_store') || '';

        merchantRESTSvc.getStores().then(function(res) {
            $rootScope.stores = res.data;
        }, function(err) {
            console.log(err);
        })

        $rootScope.setHandler = function(handler) {
            $rootScope.handler = handler;
        }

        $rootScope.$on('$stateChangeStart', function(_, toState, _, fromState) {
            if (fromState.name === 'merchant.default') {
                $rootScope.handler = undefined;
            }

            $('document').ready(function() {
                $(window).scrollTop(0);
            });
            
            $rootScope.current_state = toState.name;
        });
    }])
    .config(['$stateProvider', '$urlRouterProvider', 'uiGmapGoogleMapApiProvider', function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyBnVRxlTwkki9mi7GwRNv3SRseL6RNQRSI',
            v: '3.17',
            libraries: 'weather,geometry,visualization,drawing'
        });

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('merchant', {
                url: '',
                templateUrl: 'templates/header.html',
                controller: 'RootController'
            })
            .state('merchant.default', {
                url: '/?show',
                templateUrl: 'templates/order_panel.html',
                controller: 'OrderManageController'
            })
    }]);
