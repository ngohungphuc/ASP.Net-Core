(function () {
    'use strict';

    angular.module('myApp', [
        // Angular modules
        'ngRoute',

        // Custom modules
        'quotesService'
        // 3rd Party Modules

    ]);

    angular.module('myApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/index.html',
            controller: 'quotesController'
        }).when('/quotes/add', {
            templateUrl: 'partials/add.html',
            controller: 'quotesAddController'
        }).when('/quotes/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'quotesEditController'
        }).when('/quotes/delete/:id', {
            templateUrl: 'partials/delete.html',
            controller: 'quotesDeleteController'
        });

        //friendly url
        $locationProvider.html5Mode(true);
    }]);
})();