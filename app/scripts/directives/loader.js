'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:loader
 * @description
 * # loader
 */
angular.module('geomediaApp')
  .directive('loader', function (dataservice, fileService, $rootScope) {
    return {
      templateUrl: 'views/loader.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var dsv = d3.dsv(";", "text/plain");


        scope.loadEbola = function() {

          fileService.getFile("data/20140101_20150630_W_weighted_Ebola.csv").then(function(d){
            dataservice.setData(dsv.parse(d));

            $rootScope.gotdata = true;
          })


        }

      }
    };
  });
