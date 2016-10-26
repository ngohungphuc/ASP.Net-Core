(function () {
    'use strict';

    var quotesService = angular.module('quotesService', ['ngResource']);

    quotesService.factory('Quotes', ['$resource', function ($resource) {
        return $resource('/api/quotes/', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        });
    }]);
})();