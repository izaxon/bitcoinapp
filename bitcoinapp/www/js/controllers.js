angular.module('starter.controllers', ['ionic'])

.controller('MainCtrl', function ($scope) {
    $scope.data = {
        priceUSD: 320.2,
        blocks: 396812,
        totalBtc: 15170000,
        difficulty: 120033340651        
    };
})


;