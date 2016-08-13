(function () {
    'use strict';

    angular
        .module('app')
        .controller('quotesController', quotesController);

    quotesController.$inject = ['$scope', Quotes];

    function quotesController($scope, Quotes) {
        //calling Quotes Service
        $scope.quotes = Quotes.query();
    }
})();