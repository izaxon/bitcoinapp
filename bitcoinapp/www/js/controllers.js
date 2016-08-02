angular.module('starter.controllers', ['ionic', 'ngResource'])

    .controller('MainCtrl', function ($scope, $resource, $http, $ionicLoading) {
        $scope.data = {
            //priceUSD: 320.2,
            blocks: 396812,
            totalBtc: 15170000,
            difficulty: 120033340651
        };

        $scope.update = function () {
            $ionicLoading.show({ template: 'Updating...' });
//            $http({ method: 'GET', url: 'http://api.bitcoincharts.com/v1/weighted_prices.json' }).
              $http({ method: 'GET', url: 'http://localhost:8100/v1/weighted_prices.json' }).
                success(function (ret, status, headers, config) {
                    //set view model or do something.
                    //alert("success:" + data);
                    $scope.data.priceUSD = ret.USD["24h"];
                    $scope.data.priceEUR = ret.EUR["24h"];
                    $ionicLoading.hide();
                }).
                error(function (data, status, headers, config) {
                    $ionicLoading.hide();
                    alert("Failed to call Bitcoin API!");
                });
        };

        $scope.$on('$ionicView.enter', function () {  // TODO: not working, why?
            alert("test1");
            $scope.update();
        });

        $scope.update();
    });