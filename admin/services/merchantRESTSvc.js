angular.module('merchantApp').factory('merchantRESTSvc', ['$http', '$q', '$cookies', '$rootScope',
    function($http, $q, $cookies, $rootScope) {
        var merchantRESTSvc = {};

        merchantRESTSvc.login = function(user) {
            var deferred = $q.defer();
            $http.post('/api/v1/accounts/login', user)
                .then(function(res) {
                    if (res.data.response) {
                        deferred.resolve(res.data);
                    } else {
                        deferred.reject(res.data);
                    }
                }, function(err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }

        merchantRESTSvc.logout = function() {
            var deferred = $q.defer();
            var token = $cookies.get('token');
            $http.get('/api/v1/accounts/logout?token=' + token)
                .then(function(res) {
                    if (res.data.response) {
                        deferred.resolve(res.data);
                    } else {
                        deferred.reject(res.data);
                    }
                }, function(err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }

        merchantRESTSvc.getStores = function() {
            var deferred = $q.defer();
            var token = $cookies.get('token');
            $http.get('/api/v1/stores?token=' + token)
                .then(function(res) {
                    if (res.data.response) {
                        deferred.resolve(res.data);
                    } else {
                        deferred.reject(res.data);
                    }
                }, function(err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }


        return merchantRESTSvc;
    }
]);
