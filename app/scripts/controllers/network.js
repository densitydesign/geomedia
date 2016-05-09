'use strict';

/**
 * @ngdoc function
 * @name geomediaApp.controller:NetworkCtrl
 * @description
 * # NetworkCtrl
 * Controller of the geomediaApp
 */
angular.module('geomediaApp')
  .controller('NetworkCtrl', function ($scope, $timeout) {

        $timeout(function(){

            $scope.$broadcast("go");

        })

  });
