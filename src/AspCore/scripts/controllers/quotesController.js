(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('quotesController', quotesController);

    //inject quotes service
    quotesController.$inject = ['$scope', 'Quotes'];

    function quotesController($scope, Quotes) {
        //calling Quotes Service
        $scope.quotes = Quotes.query();
    }
})();