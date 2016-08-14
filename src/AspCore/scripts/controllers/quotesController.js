(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('quotesController', quotesController)
        .controller('quotesAddController', quotesAddController)
        .controller('quotesEditController', quotesEditController)
        .controller('quotesDeleteController', quotesDeleteController);

    //inject quotes service
    quotesController.$inject = ['$scope', 'Quotes'];

    function quotesController($scope, Quotes) {
        //calling Quotes Service
        $scope.quotes = Quotes.query();
    }

    quotesAddController.$inject = ['$scope', 'Quotes', '$location'];

    function quotesAddController($scope, Quotes, $location) {
        $scope.Quotes = new Quotes();

        $scope.AddQuotes = function () {
            $scope.quotes.$save(function () {
                $location.path('/');
            });
        }
    }
    quotesEditController.$inject = ['$scope', 'Quotes', '$location', '$routeParams'];

    function quotesAddController($scope, Quotes, $location, $routeParams) {
        $scope.quotes = Quotes.get({ id: $routeParams.id });

        $scope.EditQuotes = function () {
            $scope.quotes.$save(function () {
                $location.path('/');
            });
        }
    }

    quotesDeleteController.$inject = ['$scope', 'Quotes', '$location', '$routeParams'];

    function quotesDeleteController($scope, Quotes, $location, $routeParams) {
        $scope.quotes = Quotes.get({ id: $routeParams.id });

        $scope.DeleteQuotes = function () {
            $scope.quotes.$remove({ id: $scope.quote.id }, function () {
                $location.path('/');
            });
        }
    }
})();